import sensiblePlugin from "./sensible-plugin.js";

/**
 *
 * @param {import("fastify").FastifyInstance} app
 * @returns
 */
export async function registerPlugins(app) {
  app.log.debug("Registering plugins");

  await app.register(sensiblePlugin);
}
