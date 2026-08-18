import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserModel from './models/user.entity';
import FindUserProvider from './providers/find-user.provider';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [FindUserProvider],
})
export default class UsersModule {}
