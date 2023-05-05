import Express from 'express';
import routeAbout from './routes/about';
import routeWeather from './routes/weather';
import routeCities from './routes/cities';

const cors = require('cors');

const app = Express();

app.use(cors());
app.use(Express.json());
app.use('/about', routeAbout);
app.use('/weather', routeWeather);
app.use('/cities', routeCities);

export default app;
