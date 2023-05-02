import { AddressInfo } from '../types/types';

const debug = require('debug')('server:server');

/**
 * Event listener for HTTP server "error" event.
 */

export function onError(error: NodeJS.ErrnoException, port: number) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
   * Event listener for HTTP server "listening" event.
   */

export function onListening(serverAddress : AddressInfo | string | null) {
  // const addr = server.address();
  if (serverAddress) {
    const bind = typeof serverAddress === 'string'
      ? `pipe ${serverAddress}`
      : `port ${serverAddress.port}`;
    debug(`Listening on ${bind}`);
  }
}
