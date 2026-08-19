import { Injectable } from '@nestjs/common';
import CreateUserProvider from './providers/create-user.provider';
import CreateUserDto from './dtos/create-user.dto';

@Injectable()
export default class UsersService {
  constructor(private readonly createUserProvider: CreateUserProvider) {}

  public async createUser(data: CreateUserDto) {
    return await this.createUserProvider.createUser(data);
  }
}
