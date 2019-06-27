import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Template2Parameter } from './template2Parameter';

@Entity()
export class Template {
  @PrimaryColumn()
  public key: string;

  @Column()
  public name: string;

  @Column()
  public trafficSource: string;

  @Column()
  public active: boolean;

  @Column()
  public description: string;

  @Column()
  public appendParameters: string;

  @Column()
  public pixelTemplate: string;

  @OneToMany(() => Template2Parameter, (t2p) => t2p.template)
  public templates2params: Template2Parameter[];
}
