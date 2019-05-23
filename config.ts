import { Options } from 'sequelize';

const dbOptions: Options = {
  dialect: 'sqlite',
  storage: './db.sqlite'
};

export default {
  db: dbOptions
};