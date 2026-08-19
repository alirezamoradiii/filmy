import { forwardRef, Module } from '@nestjs/common';
import HashingProvider from './providers/hashing.provider';
import BcryptProvider from './providers/bcrypt.provider';
import SignUpProvider from './providers/sign-up.provider';
import UsersModule from '../users/users.module';
import AuthController from './auth.controller';

@Module({
  imports: [forwardRef(() => UsersModule)],
  providers: [
    {
      provide: HashingProvider,
      useClass: BcryptProvider,
    },
    SignUpProvider,
  ],
  exports: [HashingProvider],
  controllers: [AuthController]
})
export default class AuthModule {}
