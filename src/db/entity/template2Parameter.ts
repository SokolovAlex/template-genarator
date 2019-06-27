import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Template } from "./template";
import { Parameter } from "./parameter";

@Entity()
export class Template2Parameter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order: number;

  @ManyToOne(() => Template, (template) => template.templates2params)
  public template: Template;

  @ManyToOne(() => Parameter, (param) => param.templates2params)
  public parameter: Parameter;
}
