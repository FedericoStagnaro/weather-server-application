/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import allCities from '../../city.list.json';
import { CityMaped } from '../types/CityMaped';

export const filterByName = (name: string): Array<CityMaped> => {
  const mape: CityMaped[] = (allCities as Array<CityMaped>).map((city) => {
    return { name: city.name, country: city.country };
  });
  return mape.filter((city) => city.name.toUpperCase().startsWith(name.toLocaleUpperCase()));
};

export const getPagedCities = (
  cities: Array<CityMaped>,
  iStart: number,
  iEnd: number,
): Array<CityMaped> => {
  if (cities.length > (iEnd - iStart)) return cities.slice(iStart, iEnd);
  return cities;
};
