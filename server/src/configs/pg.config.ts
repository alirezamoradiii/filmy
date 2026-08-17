import { registerAs } from '@nestjs/config';

export default registerAs('pgConfig', () => ({
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT || '5432', 10),
  username: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_NAME
}));
