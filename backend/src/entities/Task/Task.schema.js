import { gql } from 'apollo-server-express';

export const Task = gql`
  type Task {
    id: Int!
    createdAt: String
    updatedAt: String
    userId: Int!
    title: String!
    description: String
  }
`;

export const UpdateTaskInput = gql`
  input UpdateTaskInput {
    title: String
    description: String
  }
`;
