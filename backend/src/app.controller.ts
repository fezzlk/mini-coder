import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query): string {
    console.log(query);
    return this.appService.getHello();
  }

  @Get(':exam_id')
  getExam(@Param() params): string {
    console.log(params.exam_id);
    // return exam;
    return this.appService.getHello();
  }
  
  @Post()
  async postAns(@Body() answer) {
    console.log(answer);
    // this.appService.checkAnswer();
    return 'Received your answer. Please wait...'
  }
}
