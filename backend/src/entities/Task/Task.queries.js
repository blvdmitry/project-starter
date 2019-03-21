import models from '../../models';

export default {
  async task (_, { id }) {
    const task = await models.task.findOne({
      where: { id },
    });

    if (!task) throw new Error('Task not found');
    return task;
  },
};
