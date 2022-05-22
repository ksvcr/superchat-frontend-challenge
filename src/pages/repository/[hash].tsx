import type { NextPage, GetServerSideProps } from 'next';

import { client, GET_REPOSITORY } from 'shared/api';
import { decodeLinkHash, getApiError } from 'shared/utils';
import { RepositoryCard } from 'features/RepositoryCard';
import { RepositoryData, RepositoryResponse, RepositoryParams, ErrorProps } from 'shared/types';

type RepositoryProps = {
  params: RepositoryParams;
  data: RepositoryData;
};

const Repository: NextPage<RepositoryProps> = ({ data, params }) => {
  return <RepositoryCard data={data} params={params} />;
};

type RepositoryPageParams = {
  hash: string;
};

export const getServerSideProps: GetServerSideProps<RepositoryProps | ErrorProps, RepositoryPageParams> = async ({
  params
}) => {
  const hash = params?.hash;
  if (!hash) {
    return { notFound: true };
  }

  try {
    const params = decodeLinkHash<RepositoryParams>(hash);

    if (!params) {
      return { notFound: true };
    }

    const { owner, name } = params;

    const data = await client.request<RepositoryResponse>(GET_REPOSITORY, { owner, name });
    return {
      props: { data: data.repository, params }
    };
  } catch (error) {
    return {
      props: { error: getApiError(error) }
    };
  }
};

export default Repository;
