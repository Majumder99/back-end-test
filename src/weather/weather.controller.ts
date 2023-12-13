// weather.controller.ts

import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async findAll() {
    return this.weatherService.findAll();
  }

  // ... other routes as necessary
}
