import models from '../../models';

export default {
  async tasks() {
    return models.task.findAll();
  },

  async task(_, { id }, { user }) {
    const task = await models.task.findOne({
      where: { id },
    });

    if (!task || !user) throw new Error('Task not found');
    return task;
  },
};
