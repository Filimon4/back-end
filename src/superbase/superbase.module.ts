import { Module } from '@nestjs/common';
import { SuperbaseService } from './superbase.service';

@Module({
  providers: [SuperbaseService],
  exports: [SuperbaseService]
})
export class SuperbaseModule {}
