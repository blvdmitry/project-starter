import { ChildProps } from 'react-apollo';
import * as TTask from 'graphql/entities/Task/Task.types';

export type GqlResponse = {
  tasks: Array<TTask.Entity>,
};

export type Props = ChildProps<{}, GqlResponse>;
