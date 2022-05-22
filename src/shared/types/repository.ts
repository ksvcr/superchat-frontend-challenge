export type RepositoryData = {
  id: string;
  description: string;
  url: string;
  stargazerCount: number;
};

export type RepositoryRequestParams = {
  owner: string;
  name: string;
};

export type RepositoryCustomParams = {
  color: string;
};

export type RepositoryResponse = {
  repository: RepositoryData;
};

export type RepositoryParams = RepositoryRequestParams & RepositoryCustomParams;
