export type RepositoryData = {
  id: string;
  description: string;
  url: string;
  stargazerCount: number;
};

export type RepositoryParams = {
  owner: string;
  name: string;
};
