import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * For each route handler, there's an (HTTPie - https://httpie.org) query
   * to conveniently run it from a terminal prompt, shown just above the handler
   */

  // seed the db
  //
  // http get localhost:3000/cats/create
  @Get('create')
  createDb() {
    return this.appService.createDb();
  }

  // http get localhost:3000/cats
  @Get()
  async getCats() {
    return this.appService.getCats();
  }

  // http get localhost:3000/cats/people
  @Get('people')
  async getCatsPeople() {
    return this.appService.getCatsPeople();
  }

  // http POST localhost:3000/cats name=Fred age:=3 breed='Alley Cat'
  @Post()
  create(@Body() cat) {
    return this.appService.create(cat);
  }
}
