import {Table, Column, Model, PrimaryKey, HasMany, DataType } from 'sequelize-typescript';
import { Log } from './log';

@Table
class User extends Model<User> {
  @PrimaryKey
  @Column
  login: string;

  @Column
  lastEnterAt: Date;

  // @HasMany(() => Log)
  // logs: Log[];
}

export { User };
