import Fastify from "fastify";
import { sayHello } from "./utils/say-hello.js";

/**
 *
 * @param {Fastify.FastifyServerOptions} options
 * @returns
 */
export function buildApp(options = {}) {
  const app = Fastify({ ...options, logger: true });
  app.route({
    method: "GET",
    url: "/",
    handler: async () => ({ message: sayHello() }),
  });

  return app;
}
