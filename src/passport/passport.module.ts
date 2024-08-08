import { Module } from '@nestjs/common';
import { PasJWTStrategy } from './jwt.strategy';
import { PasLocalStrategy } from './local.stategy';

@Module({
  providers: [PasJWTStrategy, PasLocalStrategy],
  exports: [PasJWTStrategy, PasLocalStrategy]
})
export class PassportModule {}
