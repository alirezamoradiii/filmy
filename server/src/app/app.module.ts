import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from '../configs/app.config';
import pgConfig from '../configs/pg.config';
import { TypeOrmModule } from '@nestjs/typeorm';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV ? `.env.${ENV}.local` : '.env',
      load: [appConfig, pgConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (service: ConfigService) => ({
        type: 'postgres',
        host: service.get<string>('pgConfig.host'),
        port: service.get<number>('pgConfig.port'),
        username: service.get<string>('pgConfig.username'),
        password: service.get<string>('pgConfig.password'),
        database: service.get<string>('pgConfig.database'),
        autoLoadEntities: true,
        synchronize: ENV === 'development' ? true : false
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
