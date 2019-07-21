import { Column, Entity, ManyToOne, OneToMany, JoinTable, PrimaryColumn, ManyToMany } from 'typeorm';
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
  public inputType: InputType;

  @Column()
  public userSupplied: string;

  @Column()
  public omnitureName: string;

  @ManyToOne(() => ParameterValue, (value) => value.defaultFor)
  public defaultValue: ParameterValue;

  @ManyToMany(() => ParameterValue, (value) => value.parameters)
  @JoinTable({
    name: 'param2value',
  })
  public values: ParameterValue[];

  @OneToMany(() => Template2Parameter, (t2p) => t2p.parameter)
  public templates2params: Template2Parameter[];
}
