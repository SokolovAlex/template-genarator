import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';

export enum ActionType {
  Create,
  Update,
  Delete,
}

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public url: string;

  @Column()
  public pixel: string;

  @Column({
    type: 'varchar',
    default: ActionType.Create,
  })
  public actionType: ActionType;

  @CreateDateColumn()
  public createdAt: Date;

  @ManyToOne(() => User, (user) => user.logs)
  public user: User;
}
