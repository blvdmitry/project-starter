import { getAll } from 'utilities/mock';
import { get } from 'http';

export default {
  tasks() {
    return getAll('Task');
  },

  task(_, { id }, { user }) {
    const task = get('Task', id);

    if (!user || !task) throw new Error('Task not found');
    return task;
  },
};
