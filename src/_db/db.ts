import { Sequelize } from 'sequelize';
import { User, initUser } from './models/user';
import { Log, initLog} from './models/log';

import { Template, initTemplate } from './models/template';
import { Parameter, initParameter } from './models/parameter';
import { Template2Parameter, initTemplate2Parameter } from './models/template2Parameter';
import { ParameterValue, initParameterValue } from './models/parameterValue';
import config from '../../config';

const sequelize = new Sequelize(config.db);

initLog(sequelize);
initUser(sequelize);

initParameterValue(sequelize);
initParameter(sequelize);
initTemplate2Parameter(sequelize);
initTemplate(sequelize);

const db = sequelize;
export { db, User, Log, Template, ParameterValue, Parameter, Template2Parameter };