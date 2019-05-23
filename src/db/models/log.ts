import { Model, DataTypes, NOW } from 'sequelize';

export enum ActionType {
  CREATE,
  UPDATE,
  DELETE,
};

const getArrayFromEnum = (enumValue: object): Array<string> => {
  const values: Array<string> = [];
  for (let value in enumValue) {
    values.push(enumValue[value]);
  }
  return values;
}

const actionTypeValues: Array<string> = getArrayFromEnum(ActionType);

class Log extends Model {
  public id!: number;

  public datetime!: Date;
  public action_type!: ActionType;

  public url!: string;
  public pixel!: string;

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
  },
  url: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  pixel: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
}

export { Log, fields };
