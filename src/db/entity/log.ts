import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

export enum ActionType {
  CREATE,
  UPDATE,
  DELETE,
};

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  pixel: string;

  @Column({
    type: "varchar",
    default: ActionType.CREATE
  })
  action_type: ActionType;

  @CreateDateColumn()
  createdAt: Date;
}