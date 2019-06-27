import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Template2Parameter } from './template2Parameter';

@Entity()
export class Template {
  @PrimaryColumn()
  key: string;

  @Column()
  name: string;

  @Column()
  trafficSource: string;

  @Column()
  active: boolean;

  @Column()
  description: string;

  @Column()
  appendParameters: string;

  @Column()
  pixelTemplate: string;

  @OneToMany(() => Template2Parameter, (t2p) => t2p.template)
  public templates2params: Template2Parameter[];
}
