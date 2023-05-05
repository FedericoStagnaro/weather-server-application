import { Router } from 'express';
import { postWeather } from '../controllers/weather';

const routeWeather = Router();

routeWeather.post('/', postWeather);

export default routeWeather;
