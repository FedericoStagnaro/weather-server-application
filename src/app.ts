import Express from 'express';
import routeAbout from './routes/about';
import routeWeather from './routes/weather';

const app = Express();

app.use(Express.json());
app.use('/about', routeAbout);
app.use('/weather', routeWeather);

export default app;
