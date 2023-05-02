/* eslint-disable import/prefer-default-export */
/**
 * Normalize a port into a number. Default port value 3000
 */

export function normalizePort(val: string = '3000') : number {
  const port : number = parseInt(val, 10);

  if (!Number.isNaN(port) && port >= 0) return port;

  return 3000;
}
