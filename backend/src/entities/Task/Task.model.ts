import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, types: DataTypes) => {
  return sequelize.define('task', {
    title: types.STRING,
    description: types.STRING,
  });
};
