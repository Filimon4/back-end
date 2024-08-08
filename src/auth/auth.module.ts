import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SupabaseService } from 'src/supabase/supabase.service';
import { JwtModule } from '@nestjs/jwt';
import { PasJWTStrategy } from '../passport/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports: [JwtModule.register({ secret: process.env.JWT_SECRET, signOptions: { expiresIn: '60s' }}), PassportModule, SupabaseModule],
  controllers: [AuthController],
  providers: [AuthService, PasJWTStrategy],
})
export class AuthModule {}
