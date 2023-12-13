// weather.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { WeatherSchema } from './weather.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Weather', schema: WeatherSchema }]),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
