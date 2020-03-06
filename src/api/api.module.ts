import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ApiController } from './api.controller';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [CatsModule, DogsModule],
  controllers: [ApiController]
})
export class ApiModule {}
