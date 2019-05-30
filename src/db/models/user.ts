import { Model, DataTypes } from 'sequelize';
import { Log } from '../models/log';
import { ParameterValue } from '../models/parameterValue';

class User extends Model {
  public login!: string;
  public lastEnterAt!: Date;
  
  public logs?: Log[];
  public parameterValues?: ParameterValue[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const fields = {
  login: {
    type: DataTypes.STRING(128),
    primaryKey: true,
  },
  lastEnterAt: {
    type: new DataTypes.DATE,
  }
}

const associate = (): void => {
  User.hasMany(Log, { foreignKey: 'userId', as: 'logs' });
  User.hasMany(ParameterValue, { foreignKey: 'added_userId', as: 'parameterValues' });
};

export { User, fields, associate };
