import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'admin',
    database: 'notion_db',
    entities: [
      __dirname + 'back-end/**/*.entity.{ts,js}'
    ],
    synchronize: false
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
