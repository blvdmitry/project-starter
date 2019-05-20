import { gql } from 'apollo-server-express';

export default gql`
  type Task {
    id: ID!
    userId: ID!
    title: String!
    description: String
  }

  input UpdateTaskInput {
    title: String
    description: String
  }
`;
