import gql from 'graphql-tag';

export const query = gql`
  query Tasks {
    tasks {
      id
      title
      description
    }
  }
`;

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
