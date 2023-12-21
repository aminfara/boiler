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
export default fp(async (fastify) => {
  fastify.decorate('container', iocContainer);
  fastify.log.debug("Plugin 'container' registered");
});
