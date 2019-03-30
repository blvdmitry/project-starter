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
