import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from './user';

export enum ActionType {
  Create,
  Update,
  Delete,
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
    default: ActionType.Create
  })
  action_type: ActionType;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.logs)
  public user: User;
}