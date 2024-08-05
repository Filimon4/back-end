import { Module } from '@nestjs/common';
import { PuppeterService } from './puppeter.service';
import { PuppeterController } from './puppeter.controller';

@Module({
  controllers: [PuppeterController],
  providers: [PuppeterService],
})
export class PuppeterModule {}
