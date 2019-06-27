import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Log } from './log';
import { ParameterValue } from './parameterValue';

@Entity()
export class User {
  @PrimaryColumn()
  email: string;

  @Column('datetime')
  lastEnterAt: Date;

  @OneToMany(() => Log, (log) => log.user)
  public logs: Log[];

  @OneToMany(() => ParameterValue, (value) => value.added_user)
  public parameterValues: ParameterValue[];
}