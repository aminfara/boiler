import fp from 'fastify-plugin';
import sensible, { type SensibleOptions } from '@fastify/sensible';

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<SensibleOptions>(async (fastify) => {
  await fastify.register(sensible);
  fastify.log.debug("Plugin 'sensible' registered");
});
