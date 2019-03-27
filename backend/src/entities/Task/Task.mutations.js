import models from '../../models';

export default {
  async createTask(_, args) {
    const task = { ...args.task };

    return models.task.create(task);
  },

  async completeTask(_, { id }) {
    const task = await models.task.findById(id);

    if (!task) throw new Error('Can\'t delete task');

    await models.task.destroy({
      where: { id },
    });

    return id;
  },
};
