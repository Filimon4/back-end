import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PuppeterService } from './puppeter.service';
import { CreatePuppeterDto } from './dto/create-puppeter.dto';
import { UpdatePuppeterDto } from './dto/update-puppeter.dto';

@Controller('puppeteer')
export class PuppeterController {
  constructor(private readonly puppeterService: PuppeterService) {}

  @Get('take')
  public async makeScreenShot(@Query('websitelink') websitelink: string, @Query('width') width: number, @Query('height') height: number) {
    await this.puppeterService.takeScreenShot(websitelink, width, height);
  }

  @Delete('delete')
  public async deleteScreenShot() {
    return 'delete screen'
  }

}
