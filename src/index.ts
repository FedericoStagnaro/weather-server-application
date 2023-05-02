import { config } from 'dotenv';
import http from 'http';
import { normalizePort } from './utils/portNormalizer';
import { onError, onListening } from './utils/serverEvents';
import app from './app';
import { AddressInfo } from './types/types';

config();

/**
 * Get port from environment and store in Express.
 */
const port : number = normalizePort(process.env.PORT);
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => {
  console.log('Listening on port: ', port);
});

const serverAddres = server.address as unknown as AddressInfo | string | null;
server.on('error', (error) => onError(error, port));
server.on('listening', () => onListening(serverAddres));
