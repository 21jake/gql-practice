import { Module } from '@nestjs/common';
import { PostGraphileController } from 'src/controllers/postgraphile.controller';

@Module({
  imports: [],
  controllers: [PostGraphileController],
  providers: [],
})
export class PostGraphileModule {}
