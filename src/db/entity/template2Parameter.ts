import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Parameter } from './parameter';
import { ParameterValue } from './parameterValue';
import { Template } from './template';

@Entity()
export class Template2Parameter {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public order: number;

  @ManyToOne(() => Template, (template) => template.templates2params)
  public template: Template;

  @ManyToOne(() => Parameter, (param) => param.templates2params)
  public parameter: Parameter;

  @ManyToOne(() => ParameterValue, (paramValue) => paramValue.predefinedFor)
  public predefinedValue: ParameterValue;
}
