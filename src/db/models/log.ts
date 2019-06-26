import Sequelize from 'sequelize';
import { User, IUser } from '../models/user';
import { getArrayFromEnum } from '../../utils'

const {Model, DataTypes, NOW } = Sequelize;

export enum ActionType {
  CREATE,
  UPDATE,
  DELETE,
};

export interface LogAttributes {
  datetime: Date;
  action_type: ActionType;
  url: string;
  pixel: string;
  user: string;
}

const actionTypeValues: Array<string> = getArrayFromEnum(ActionType);

class Log extends Model implements LogAttributes{
  public id!: number;

  public datetime!: Date;
  public action_type!: ActionType;

  public url!: string;
  public pixel!: string;

  // public user!: User;
  public user!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const fields = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  datetime: {
    type: DataTypes.DATE,
    defaultValue: NOW,
  },
  action_type: {
    type: DataTypes.ENUM,
    values: actionTypeValues,
    allowNull: false,
    defaultValue: ActionType.CREATE,
  },
  url: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  pixel: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}

const initLog = (sequelize: Sequelize.Sequelize): void => {
  Log.init(fields, {
    tableName: "Logs",
    sequelize
  });

  //Log.belongsTo(User, { foreignKey: 'userId', as: 'user' });
};

export { Log, initLog };
