import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  port: process.env.PORT,
  mail_host: process.env.MAIL_HOST,
  mail_port: parseInt(process.env.MAIL_PORT || '2525', 10),
  mail_userName: process.env.MAIL_USER,
  mail_password: process.env.MAIL_PASS,
}));
