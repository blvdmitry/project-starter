import { ChildProps } from 'react-apollo';

export type Task = {
  id: string,
  title: string,
  description?: string,
};

export type GqlResponse = {
  tasks: Array<Task>,
};

export type Props = ChildProps<{}, GqlResponse>;
