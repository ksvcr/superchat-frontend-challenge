import type { NextApiRequest, NextApiResponse } from 'next';
import { ClientError } from 'graphql-request';

import { client, GET_REPOSITORY } from 'shared/api';
import { getClientErrorMessages } from 'shared/utils';
import { RepositoryData, RepositoryParams } from 'shared/types';

type RepositoryResponse = {
  repository: RepositoryData;
};

type Error = {
  message?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<RepositoryData | Error>) => {
  const { owner, name } = req.query as RepositoryParams;

  try {
    const data = await client.request<RepositoryResponse>(GET_REPOSITORY, { owner, name });
    res.status(200).send(data.repository);
  } catch (error) {
    if (error instanceof ClientError) {
      const messages = getClientErrorMessages(error);
      res.status(400).send({ message: messages.join(',') });
      return;
    }

    res.status(500).send({ message: 'Something went wrong' });
  }
};

export default handler;
