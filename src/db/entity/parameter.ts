import { Entity, PrimaryColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { ParameterValue } from './parameterValue';
import { Template2Parameter } from "./template2Parameter";

export enum InputType {
  Select,
  Radio,
  Checkbox,
};

@Entity()
export class Parameter {
  @PrimaryColumn()
  key: string;

  @Column()
  name: string;

  @Column({
    type: "varchar",
    default: InputType.Select
  })
  input_type: InputType;

  @Column()
  user_supplied: string;

  @Column()
  omniture_name: string;

  @OneToOne(type => ParameterValue)
  @JoinColumn()
  default_value: ParameterValue;

  @OneToMany(() => ParameterValue, (value) => value.parameter)
  public values: ParameterValue[];

  @OneToMany(() => Template2Parameter, (t2p) => t2p.parameter)
  public templates2params: Template2Parameter[];
}
