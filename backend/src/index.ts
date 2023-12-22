import fastify from 'fastify';
import { type AppOptions, app } from './app.js';
import { getConfig } from './config.js';

const config = getConfig();

const options: AppOptions = {
  logger: { level: 'debug' },
};

const server = fastify(options);

await server.register(app, options);

await server.listen({ port: config.PORT });
