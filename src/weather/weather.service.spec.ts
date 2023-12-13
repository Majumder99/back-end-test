// weather.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { WeatherService } from './weather.service';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { WeatherSchema } from './weather.schema';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([{ name: 'Weather', schema: WeatherSchema }]),
      ],
      providers: [WeatherService],
    }).compile();

    service = module.get<WeatherService>(WeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add tests for your service methods here
});
