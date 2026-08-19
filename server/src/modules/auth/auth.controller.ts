import { Body, Controller, Post } from '@nestjs/common';
import SignUpProvider from './providers/sign-up.provider';
import CreateUserDto from '../users/dtos/create-user.dto';

@Controller()
export default class AuthController {
  constructor(private readonly signUpProvider: SignUpProvider) {}

  @Post('signup')
  public async signUp(@Body() data: CreateUserDto) {
    return await this.signUpProvider.signUp(data);
  }
}
