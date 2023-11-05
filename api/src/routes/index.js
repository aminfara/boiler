import { addRootRoute } from "./add-root-route.js";

/**
 * Add all routes to the app
 * @param {import("fastify").FastifyInstance} app
 */
export function addRoutes(app) {
  addRootRoute(app);
}
