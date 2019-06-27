import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { ParameterValue } from './parameterValue';
import { Template2Parameter } from './template2Parameter';

export enum InputType {
  Select,
  Radio,
  Checkbox,
}

@Entity()
export class Parameter {
  @PrimaryColumn()
  public key: string;

  @Column()
  public name: string;

  @Column({
    type: 'varchar',
    default: InputType.Select,
  })
  public input_type: InputType;

  @Column()
  public user_supplied: string;

  @Column()
  public omniture_name: string;

  @OneToOne((type) => ParameterValue)
  @JoinColumn()
  public default_value: ParameterValue;

  @OneToMany(() => ParameterValue, (value) => value.parameter)
  public values: ParameterValue[];

  @OneToMany(() => Template2Parameter, (t2p) => t2p.parameter)
  public templates2params: Template2Parameter[];
}
