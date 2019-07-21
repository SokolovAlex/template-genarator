import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Parameter } from './parameter';
import { User } from './user';
import { Template2Parameter } from './template2Parameter';

@Entity()
export class ParameterValue {
  @PrimaryColumn()
  public key: string;

  @Column()
  public name: string;

  @OneToMany(() => Parameter, (parameter) => parameter.defaultValue)
  public defaultFor: Parameter[];

  @ManyToOne(() => User, (user) => user.parameterValues)
  public addedUser: User;

  @ManyToMany(() => Parameter, (parameter) => parameter.values)
  public parameters: Parameter[];

  @OneToMany(() => Template2Parameter, (t2p) => t2p.predefinedValue)
  public predefinedFor: Template2Parameter;
}
