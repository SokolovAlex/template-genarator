import { Sequelize } from 'sequelize';
import { User, fields as userFields } from './models/user';
import { Log, fields as logFields } from './models/log';
import config from '../../config';

const sequelize = new Sequelize(config.db);

User.init(userFields, {
  sequelize,
  tableName: 'Users',
});

Log.init(logFields, {
  sequelize,
  tableName: 'Logs',
});

sequelize.sync({ force: true })
