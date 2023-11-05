import Fastify from "fastify";
import { addRoutes } from "./routes/index.js";

/**
 *
 * @param {Fastify.FastifyServerOptions} options
 * @returns
 */
export function buildApp(options = {}) {
  const app = Fastify({ logger: true, ...options });

  addRoutes(app);

  return app;
}
