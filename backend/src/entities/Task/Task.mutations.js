import { ApolloError } from 'apollo-server-express';
import uuid from 'uuid/v4';
import { add, remove, get } from 'utilities/mock';

export default {
  createTask(_, args) {
    add('Task', uuid(), args.task);
  },

  completeTask(_, { id }) {
    if (!get('Task', id)) throw new ApolloError('Can\'t delete task');

    remove('Task', id);
    return id;
  },
};
