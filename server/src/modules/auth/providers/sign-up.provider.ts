import { forwardRef, Inject, Injectable } from '@nestjs/common';
import UsersService from '../../users/users.service';
import CreateUserDto from '../../users/dtos/create-user.dto';

@Injectable()
export default class SignUpProvider {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService
  ) {}

  public async signUp(data: CreateUserDto) {
    return await this.usersService.createUser(data);
  }
}
