import fp from 'fastify-plugin';
import { iocContainer } from '../ioc.js';

declare module 'fastify' {
  interface FastifyInstance {
    container: typeof iocContainer;
  }
}

/**
 * This plugins adds the ioc container to the fastify instance
 */
export default fp(async (server, _options) => {
  server.decorate('container', iocContainer);
});
