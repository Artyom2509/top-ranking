import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { ConfigService } from '@nestjs/config';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly configServise: ConfigService) {}



  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  @Get('get/:alias')
  async get(@Param('id') alias: string) {
    this.configServise.get('TEST')
  }

  @Patch('save')
  async save(@Param('id') id: string, @Body() dto: TopPageModel) {}

  @Delete('delete')
  async delete(@Param('id') id: string) {}

  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindTopPageDto) {}
}
