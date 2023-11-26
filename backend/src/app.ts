import AutoLoad, { type AutoloadPluginOptions } from '@fastify/autoload';
import { type FastifyPluginAsync, type FastifyServerOptions } from 'fastify';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const fileName = fileURLToPath(import.meta.url);
const currentDirectory = dirname(fileName);

export interface AppOptions extends FastifyServerOptions, Partial<AutoloadPluginOptions> {}

export const app: FastifyPluginAsync<AppOptions> = async (fastify, options): Promise<void> => {
  fastify.log.info('Registering plugins and routes');

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(currentDirectory, 'plugins'),
    options,
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(currentDirectory, 'routes'),
    options,
  });
};
