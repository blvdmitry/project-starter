import models from '../../models';

export default {
  async createTask(_, args, { user }) {
    const task = { ...args.task, userId: user.id };

    return models.task.create(task);
  },
};
