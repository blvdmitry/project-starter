import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { AuthenticationError } from 'apollo-server-express';
import models from '../../models';

export default {
  async signup(_, { username, email, password }) {
    const user = await models.user.create({
      username,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    return jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1y' },
    );
  },

  async login(_, { email, password }) {
    const user = await models.user.findOne({ where: { email } });
    const error = 'Wrong email or password';

    if (!user) throw new Error(error);

    const valid = bcrypt.compareSync(password, user.password);

    if (!valid) throw new AuthenticationError(error);

    return jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1y' },
    );
  },
};
