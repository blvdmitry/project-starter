import { gql } from 'apollo-server-express';
import User from './entities/User/User.schema';
import Task from './entities/Task/Task.schema';

const RootQuery = gql`
  type RootQuery {
    me: User

    task (id: ID!): Task @isAuthenticated
    tasks: [Task]
  }
`;

const RootMutation = gql`
  type RootMutation {
    signup (username: String!, email: String!, password: String!): String
    login (email: String!, password: String!): String

    createTask (task: UpdateTaskInput!): Task
    completeTask (id: ID!): String
  }
`;

const SchemaDefinition = gql`
  directive @isAuthenticated on QUERY | FIELD | MUTATION | FIELD_DEFINITION
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export default {
  typeDefs: [
    SchemaDefinition, RootQuery, RootMutation,
    User,
    Task,
  ],
  directiveResolvers: {
    isAuthenticated: (next, source, args, context) => {
      if (context.user) return next();
      throw new Error('Must be authenticated');
    },
  },
};
