import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.GITHUB_API_URL
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.GITHUB_AUTH_TOKEN;

  if (token === undefined) {
    throw Error('GITHUB_AUTH_TOKEN environment variable was not set');
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
