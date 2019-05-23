import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user'

import config from '../../../config';

const sequelize = new Sequelize(config.db);

sequelize.addModels([ User ]);

// sequelize.sync();


// User.create({ login: '1', lastEnterAt: new Date()});