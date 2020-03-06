import { Controller, Get } from '@nestjs/common';

@Controller('api/cats')
export class CatsController {
  @Get()
  allCats() {
    return [1, 2];
  }
}
