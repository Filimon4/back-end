import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import postgresConfig from 'src/config/postgresConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [postgresConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('database'))
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
