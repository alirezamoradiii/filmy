import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserModel from './models/user.entity';
import FindUserProvider from './providers/find-user.provider';
import UsersService from './users.service';
import AuthModule from '../auth/auth.module';
import CreateUserProvider from './providers/create-user.provider';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([UserModel]),
  ],
  providers: [FindUserProvider, UsersService, CreateUserProvider],
  exports: [UsersService],
})
export default class UsersModule {}
