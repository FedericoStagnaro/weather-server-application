import { CityMaped } from './CityMaped';
import Pagination from './Pagination';

export default interface Message {
  status: number,
  message?: Pagination,
  cities?: CityMaped[]
}
