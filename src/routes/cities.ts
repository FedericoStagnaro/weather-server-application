import { Router } from 'express';
import { getCities } from '../controllers/cities';

const routeCities = Router();

routeCities.get('/', getCities);

export default routeCities;
