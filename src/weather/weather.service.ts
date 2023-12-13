// weather.service.ts

import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Weather } from './weather.interface'; // Define this interface based on your schema
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: { q: '53.1,-0.13' },
  headers: {
    'X-RapidAPI-Key': '03f0f01fb9mshf8e786af0d4f23ap19e729jsn8dadb67f941e',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

@Injectable()
export class WeatherService {
  private readonly logger = new Logger(WeatherService.name);

  constructor(
    @InjectModel('Weather') private readonly weatherModel: Model<Weather>,
  ) {
    this.fetchAndStoreWeatherData();
  }

  async fetchAndStoreWeatherData() {
    try {
      const response = await axios.request(options);
      const { text, icon, code } = response.data.current.condition; // Adjust this according to the API response
      await this.create({ text, icon, code });
    } catch (error) {
      this.logger.error('Failed to fetch weather data', error);
    }
  }

  async create(weatherData: Weather): Promise<Weather> {
    const newWeatherData = new this.weatherModel(weatherData);
    return newWeatherData.save();
  }

  async findAll(): Promise<Weather[]> {
    return this.weatherModel.find().exec();
  }

  // ... other methods as needed
}
