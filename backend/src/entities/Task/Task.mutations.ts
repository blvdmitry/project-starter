import models from '../../models';

export default {
  async createTask(_: any, args: any, { user }: any) {
    const task = { ...args.task, userId: user.id };

    return models.task.create(task);
  },
};
