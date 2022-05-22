export type Owner = {
  avatarUrl: string;
  login: string;
};

export type RepositoryData = {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  owner: Owner;
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
