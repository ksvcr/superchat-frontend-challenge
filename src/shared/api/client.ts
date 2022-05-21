import { GraphQLClient } from 'graphql-request';

const getEndpoint = () => {
  const url = process.env.GITHUB_API_URL;

  if (url === undefined) {
    throw Error('GITHUB_API_URL environment variable was not set');
  }

  return url;
};

const getToken = () => {
  const token = process.env.GITHUB_AUTH_TOKEN;

  if (token === undefined) {
    throw Error('GITHUB_AUTH_TOKEN environment variable was not set');
  }

  return token;
};

export const client = new GraphQLClient(getEndpoint(), {
  headers: {
    authorization: `Bearer ${getToken()}`
  }
});
