import type { NextApiRequest, NextApiResponse } from 'next';
import { ClientError } from 'graphql-request';

import { client, GET_REPOSITORY } from 'shared/api';
import { getApiError } from 'shared/utils';
import { RepositoryData, RepositoryRequestParams, RepositoryResponse } from 'shared/types';

type Error = {
  message?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<RepositoryData | Error>) => {
  const { owner, name } = req.query as RepositoryRequestParams;

  try {
    const data = await client.request<RepositoryResponse>(GET_REPOSITORY, { owner, name });
    res.status(200).send(data.repository);
  } catch (error) {
    const { message, statusCode } = getApiError(error);
    res.status(statusCode).send({ message });
  }
};

export default handler;
