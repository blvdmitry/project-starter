import TaskQueries from 'entities/Task/Task.queries';
import TaskMutations from 'entities/Task/Task.mutations';

// Add mocks to store
import 'entities/Task/Task.mocks';

export default {
  RootQuery: () => ({
    ...TaskQueries,
  }),
  RootMutation: () => ({
    ...TaskMutations,
  }),
};
