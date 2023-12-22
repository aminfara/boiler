import fp from 'fastify-plugin';
import { type IocContainer, getIocContainer } from '../ioc.js';

declare module 'fastify' {
  interface FastifyInstance {
    container: IocContainer;
  }
}

/**
 * This plugins adds the ioc container to the fastify instance
 */
export default fp(async (fastify) => {
  fastify.decorate('container', getIocContainer());
  fastify.log.debug("Plugin 'container' registered");
});
