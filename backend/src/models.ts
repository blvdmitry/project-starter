import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configObject from './config/config';

const env: any = process.env.NODE_ENV || 'development';
const config: any = (configObject as any)[env];
const models: any = {};
let sequelize: any;

if (config.use_env_variable) {
  const variable = process.env[config.use_env_variable];
  sequelize = variable && new Sequelize(variable);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

const entitiesDir = path.resolve(__dirname, './entities');

fs
  .readdirSync(entitiesDir)
  .forEach((modelName: any) => {
    const model = sequelize.import(path.join(entitiesDir, `./${modelName}/${modelName}.model.js`));
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName: any) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
