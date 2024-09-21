import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import postgresConfig from 'src/config/postgresConfig';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TestModule } from './test/test.module';

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
    AuthModule,
    UserModule,
    TestModule,
  ],
})
export class AppModule {}
