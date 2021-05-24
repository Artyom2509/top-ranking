import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModule } from './review.module';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModule, '_id'>) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Get('byProduct/:productid')
  async getByProduct(@Param('productid') productId: string) {}
}
