import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PuppeterService } from './puppeter.service';
import { ImgPuppeteerDto } from './dto/create-puppeter.dto.ts';

@Controller('puppeteer')
export class PuppeterController {
  constructor(private readonly puppeterService: PuppeterService) {}


  @Get('take')
  public async makeScreenShot(@Body() img: ImgPuppeteerDto) {
    await this.puppeterService.takeScreenShot(img.websitelink, img.width, img.height);
  }

  @Delete('delete')
  public async deleteScreenShot() {
    return 'delete screen'
  }

}
