import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import UserModel from '../../users/models/user.entity';

@Injectable()
export default class SendMailProvider {
  constructor(private readonly mailService: MailerService) {}

  public async sendWelcomeEmail(user: UserModel): Promise<void> {
    try {
      await this.mailService.sendMail({
        to: user.email,
        subject: 'Welcome to Filmy',
        template: './welcome',
        context: {
          email: user.email,
        },
      });
    } catch (error) {
      console.error('Error sending welcome email:', error);
      throw new InternalServerErrorException('Error sending welcome email');
    }
  }
}
