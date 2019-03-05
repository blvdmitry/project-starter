module.exports = (sequelize: any, DataTypes: any) => {
  return sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
};
