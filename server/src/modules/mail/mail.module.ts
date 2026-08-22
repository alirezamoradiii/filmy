import { Global, Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { EjsAdapter } from '@nestjs-modules/mailer/adapters/ejs.adapter';
import SendMailProvider from './providers/send-mail.provider';

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (service: ConfigService) => ({
        transport: {
          host: service.get<string>('appConfig.mail_host'),
          port: service.get<number>('appConfig.mail_port'),
          auth: {
            user: service.get<string>('appConfig.mail_userName'),
            pass: service.get<string>('appConfig.mail_password'),
          },
        },
        defaults: {
          from: `Filmy Team <no-reply@filmy.com>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new EjsAdapter({
            inlineCssEnabled: true,
          }),
          options: {
            strict: false,
          },
        },
      }),
    }),
  ],
  providers: [SendMailProvider],
  exports: [SendMailProvider],
})
export default class MailModule {}
