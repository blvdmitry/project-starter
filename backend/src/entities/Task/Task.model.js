export default (sequelize, types) => {
  return sequelize.define('task', {
    title: types.STRING,
    description: types.STRING,
  });
};
