import { Module } from '@nestjs/common';
import HashingProvider from './providers/hashing.provider';
import BcryptProvider from './providers/bcrypt.provider';

@Module({
  providers: [
    {
      provide: HashingProvider,
      useClass: BcryptProvider,
    },
  ],
  exports: [HashingProvider],
})
export default class AuthModule {}
