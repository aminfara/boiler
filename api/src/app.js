import Fastify from "fastify";
import { registerPlugins } from "./plugins/index.js";
import { addRoutes } from "./routes/index.js";

/**
 *
 * @param {Fastify.FastifyServerOptions} options
 * @returns
 */
export async function buildApp(options = {}) {
  const app = Fastify({ logger: true, ...options });

  await registerPlugins(app);

  addRoutes(app);

  return app;
}
