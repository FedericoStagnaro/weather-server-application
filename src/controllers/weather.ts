/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import { fetchService } from '../services/fetch';
// import fetch from 'fetch'

export const postWeather = async (request: Request, response: Response) => {
  const { city, unit } = request.body;
  const appiKey = process.env.OPEN_WEATHER_API;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appiKey}&units=${unit}`;

  try {
    const resData: any = await fetchService(url);
    response.json(resData.main.temp);
  } catch (error) {
    response.status(400);
    response.json({ status: 400, message: error });
  }
};
