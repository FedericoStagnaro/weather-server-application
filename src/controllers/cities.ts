/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import { filterByName, getPagedCities } from '../utils/citiesFilter';
import calculatePage from '../utils/citiesPagination';
import Pagination from '../types/Pagination';
import Message from '../types/Message';

export const getCities = (request: Request, response: Response) => {
  const limit: number = parseInt(request.query.limit as string, 10) || 10;
  const offset: number | undefined = parseInt(request.query.offset as string, 10) || 10;
  const page: number = parseInt(request.query.page as string, 10) || 1;
  const name: string = request.query.name as string || '';

  try {
    const allCities = filterByName(name);

    const pages : Pagination = calculatePage(allCities.length, page, offset, limit, request.baseUrl, name);

    const from = offset * (page - 1);
    const pagedCities = getPagedCities(allCities, from, from + limit);

    const message : Message = {
      status: 200,
      message: pages,
      cities: pagedCities,
    };

    return response.status(200).json(message);
  } catch (error) {
    console.log(error);
    return response.status(400);
  }
};
