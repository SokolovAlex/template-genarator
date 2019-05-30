import { Sequelize } from 'sequelize';
import { User, fields as userFields, associate as userRelations } from './models/user';
import { Log, fields as logFields, associate as logRelations } from './models/log';
import { Template, fields as templateFields, associate as templateRelations } from './models/template';
import { Parameter, fields as parameterFields, associate as parameterRelations } from './models/parameter';
import { Template2Parameter, fields as template2ParameterFields, associate as template2ParameterRelations } from './models/template2Parameter';
import { ParameterValue, fields as parameterValueFields, associate as parameterValueRelations  } from './models/parameterValue';
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

Template.init(templateFields, {
  sequelize,
  tableName: 'Templates',
});

Parameter.init(parameterFields, {
  sequelize,
  tableName: 'Parameters',
});

Template2Parameter.init(template2ParameterFields, {
  sequelize,
  tableName: 'TemplateParameters',
});

ParameterValue.init(parameterValueFields, {
  sequelize,
  tableName: 'ParameterValues',
});

userRelations();
logRelations();
templateRelations();
parameterRelations();
template2ParameterRelations();
parameterValueRelations();

sequelize.sync({ force: true })
