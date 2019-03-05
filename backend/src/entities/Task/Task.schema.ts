export const Task = `
  type Task {
    id: Int!
    createdAt: String
    updatedAt: String
    userId: Int!
    title: String!
    description: String
  }
`;

export const CreateTaskInput = `
  input UpdateTaskInput {
    title: String
    description: String
  }
`;
