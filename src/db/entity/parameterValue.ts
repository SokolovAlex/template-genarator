import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Parameter } from './parameter';
import { User } from './user';

@Entity()
export class ParameterValue {
  @PrimaryColumn()
  public key: string;

  @Column()
  public name: string;

  @ManyToOne(() => User, (user) => user.parameterValues)
  public added_user: User;

  @ManyToOne(() => Parameter, (parameter) => parameter.values)
  public parameter: Parameter;
}
