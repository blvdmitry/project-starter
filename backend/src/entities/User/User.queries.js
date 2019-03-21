import models from '../../models';

export default {
  async me(_, args, { user }) {
    if (!user) return null;

    return models.user.findById(user.id);
  },
};
