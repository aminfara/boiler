import { sayHello } from "../utils/say-hello.js";

/**
 * @param {import("fastify").FastifyInstance} app
 */
export function addRootRoute(app) {
  app.route({
    method: "GET",
    url: "/",
    handler: async () => ({ message: sayHello() }),
  });
}
