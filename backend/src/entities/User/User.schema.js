import { gql } from 'apollo-server-express';

export const User = gql`
  type User {
    id: Int!
    username: String!
    email: String!
  }
`;
