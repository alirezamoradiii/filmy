import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserModel from './models/user.entity';
import FindUserProvider from './providers/find-user.provider';
import UsersService from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [FindUserProvider],
  exports: [UsersService],
})
export default class UsersModule {}
