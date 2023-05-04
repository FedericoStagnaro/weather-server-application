import { Router } from 'express';
import { getAbout } from '../controllers/about';

const routeAbout = Router();

routeAbout.get('/', getAbout);

export default routeAbout;
