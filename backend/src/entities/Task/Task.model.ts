export default (sequelize: any, DataTypes: any) => {
  return sequelize.define('task', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  });
};
