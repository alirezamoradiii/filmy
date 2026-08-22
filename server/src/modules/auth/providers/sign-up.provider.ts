import { forwardRef, Inject, Injectable } from '@nestjs/common';
import UsersService from '../../users/users.service';
import CreateUserDto from '../../users/dtos/create-user.dto';
import SendMailProvider from '../../mail/providers/send-mail.provider';

@Injectable()
export default class SignUpProvider {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    private readonly sendMailProvider: SendMailProvider,
  ) {}

  public async signUp(data: CreateUserDto) {
    const user = await this.usersService.createUser(data);

    await this.sendMailProvider.sendWelcomeEmail(user as any);
    
    return user;
  }
}
