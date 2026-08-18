import { Injectable } from '@nestjs/common';

@Injectable()
export default abstract class HashingProvider {
  abstract hash(data: string | Buffer): Promise<string>;

  abstract compare(data: string | Buffer, enc: string): Promise<boolean>;
}
