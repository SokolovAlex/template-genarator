import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Parameter } from './parameter';
import { User } from './user';
import { Template2Parameter } from './template2Parameter';

@Entity()
export class ParameterValue {
  @PrimaryColumn()
  public key: string;

  @Column()
  public name: string;

  @ManyToOne(() => User, (user) => user.parameterValues)
  public addedUser: User;

  @ManyToOne(() => Parameter, (parameter) => parameter.values)
  public parameter: Parameter;

  @OneToMany(() => Template2Parameter, (t2p) => t2p.predefinedValue)
  public predefinedFor: Template2Parameter;
}
