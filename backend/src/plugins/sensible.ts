import sensible, { SensibleOptions } from "@fastify/sensible";
import fp from "fastify-plugin";

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export const sensiblePlugin = fp<SensibleOptions>(async (f) => {
  await f.register(sensible);
  f.log.debug(`Plugin 'sensible' registered`);
});
