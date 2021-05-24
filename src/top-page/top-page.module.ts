import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TopPageController } from './top-page.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TopPageController],
})
export class TopPageModule {}
