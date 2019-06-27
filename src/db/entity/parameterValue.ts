import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { User } from './user'
import { Parameter } from "./parameter";

@Entity()
export class ParameterValue {
  @PrimaryColumn()
  key: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.parameterValues)
  public added_user: User;

  @ManyToOne(() => Parameter, (parameter) => parameter.values)
  public parameter: Parameter;
}
