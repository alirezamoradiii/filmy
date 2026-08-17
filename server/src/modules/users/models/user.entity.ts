import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UsersRole } from './types/userModel.type';

@Entity('users')
export default class UserModel {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
    nullable: false,
  })
  email!: string;

  @Column({
    nullable: false,
  })
  password!: string;

  @Column({
    type: 'enum',
    enum: UsersRole,
    default: UsersRole.CUSTOMER,
  })
  role!: UsersRole;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
