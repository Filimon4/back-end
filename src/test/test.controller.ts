import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Response } from 'express';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}
  @Get()
  findAll() {
    return this.testService.findAll();
  }

  @Get('cookie')
  cookie(@Res() res: Response) {
    console.log('cookie')
    res.cookie('test', 'value', {
      domain: 'ya.ru',
      httpOnly: true
    })
    return res.send()
  }
}
