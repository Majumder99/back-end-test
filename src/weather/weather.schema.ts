// weather.schema.ts

import * as mongoose from 'mongoose';

export const WeatherSchema = new mongoose.Schema({
  text: String,
  icon: String,
  code: Number,
});
