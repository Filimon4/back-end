import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SuperbaseModule } from './superbase/superbase.module';
import { PuppeterModule } from './puppeter/puppeter.module';
import { AuthModule } from './auth/auth.module';
import postgresConfig from 'src/config/postgresConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [postgresConfig]
    }),
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => (configService.get('database') as TypeOrmModuleOptions)
    // }),
    SuperbaseModule,
    PuppeterModule,
    AuthModule
  ],
})
export class AppModule {}
