import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './strategies/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RefreshStrategy } from './strategies/refresh.strategy';

@Module({
  imports: [JwtModule.register({secret: process.env.JWT_SECRET, signOptions: {expiresIn: '20m'}}), SupabaseModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, RefreshStrategy],
  exports: [AuthService],
})
export class AuthModule {}
