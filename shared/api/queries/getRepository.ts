import { gql } from '@apollo/client';

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
