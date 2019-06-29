import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Log } from './log';
import { ParameterValue } from './parameterValue';

@Entity()
export class User {
  @PrimaryColumn()
  public email: string;

  @Column('datetime')
  public lastEnterAt: Date;

  @OneToMany(() => Log, (log) => log.user)
  public logs: Log[];

  @OneToMany(() => ParameterValue, (value) => value.addedUser)
  public parameterValues: ParameterValue[];
}
