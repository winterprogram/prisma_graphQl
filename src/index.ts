import 'reflect-metadata';
import { config } from 'dotenv';
import Server, { logger } from './server';

config();

const server = new Server();
async function startApp() {
  logger.info('Starting server...');
  await server.init();
  server.startApp();
}

startApp();

export default server;
