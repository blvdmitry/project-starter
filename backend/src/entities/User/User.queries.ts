import models from '../../models';

export default {
  async me(_: any, args: any, { user }: any) {
    if (!user) return null;

    return models.user.findById(user.id);
  },
};
