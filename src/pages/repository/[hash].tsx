import type { NextPage, GetServerSideProps } from 'next';

import { client, GET_REPOSITORY } from 'shared/api';
import { decodeLinkHash, getApiError } from 'shared/utils';
import { RepositoryCard } from 'shared/components/RepositoryCard';
import { RepositoryData, RepositoryResponse, RepositoryParams, ErrorProps } from 'shared/types';

type RepositoryProps = {
  data: RepositoryData;
};

const Repository: NextPage<RepositoryProps> = ({ data }) => {
  return <RepositoryCard data={data} />;
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
      props: { data: data.repository }
    };
  } catch (error) {
    return {
      props: { error: getApiError(error) }
    };
  }
};

export default Repository;
