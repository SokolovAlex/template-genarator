import { Model, DataTypes, Sequelize, Association } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin,
  HasManyHasAssociationMixin, 
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin } from 'sequelize';
import { Log } from '../models/log';
import { ParameterValue } from '../models/parameterValue';

export interface IUser {
  login: string;
}

class User extends Model {
  public login!: string;
  public lastEnterAt!: Date;
  
  public readonly logs?: Log[];

  public static associations: {
    logs: Association<User, Log>;
  };

  public getLog!: HasManyGetAssociationsMixin<Log>; // Note the null assertions!
  public addLog!: HasManyAddAssociationMixin<Log, number>;
  public hasLog!: HasManyHasAssociationMixin<Log, number>;
  public countLog!: HasManyCountAssociationsMixin;
  public createLog!: HasManyCreateAssociationMixin<Log>;

  //public parameterValues?: ParameterValue[];

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

const initUser = (sequelize: Sequelize): void => {
  User.init(fields, {
    tableName: "Users",
    sequelize
  });

  User.hasMany(Log, { sourceKey: 'login', foreignKey: 'user', as: 'logs' });
  // User.hasMany(ParameterValue, { foreignKey: 'added_userId', as: 'parameterValues' });
};

export { User, initUser };
