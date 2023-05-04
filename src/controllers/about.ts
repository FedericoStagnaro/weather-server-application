/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import properties from '../../package.json';

export const getAbout = (request : Request, response: Response) => {
  const aboutInfo = {
    name: properties.name,
    description: properties.description,
    author: properties.author,
  };
  response.json(aboutInfo);
};
