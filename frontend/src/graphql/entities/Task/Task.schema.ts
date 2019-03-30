import gql from 'graphql-tag';

export const complete = gql`
  mutation CompleteTask ($id: Int!) {
    completeTask (id: $id)
  }
`;

export const create = gql`
  mutation CreateTask ($task: UpdateTaskInput!) {
    createTask (task: $task) {
      id
    }
  }
`;
