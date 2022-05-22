import { gql } from 'graphql-request';

export const GET_REPOSITORY = gql`
  query Repository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      url
      stargazerCount
      forkCount
      owner {
        avatarUrl
        login
      }
    }
  }
`;
