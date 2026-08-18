import { Injectable } from '@nestjs/common';
import HashingProvider from './hashing.provider';
import * as bcrypt from 'bcrypt';

@Injectable()
export default class BcryptProvider implements HashingProvider {
  public async hash(data: string | Buffer) {
    return bcrypt.hash(data, 12);
  }

  public async compare(data: string | Buffer, enc: string): Promise<boolean> {
    return bcrypt.compare(data, enc);
  }
}
