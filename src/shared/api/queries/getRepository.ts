import { gql } from 'graphql-request';

export const GET_REPOSITORY = gql`
  query Repository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      description
      url
      stargazerCount
    }
  }
`;
