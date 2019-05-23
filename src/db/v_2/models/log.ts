import {Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
import { User } from './user';
import { enum } from '../../models/log';

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

@Table
class Log extends Model<User> {
  @Column
  public id!: number;

  @Column
  public datetime!: Date;

  @Column(DataType.Enum)
  public action_type!: ActionType;

  @Column
  public url!: string;

  @Column
  public pixel!: string;
}

export { Log };
