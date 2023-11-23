import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get("/", async function (_request, _reply) {
    return { root: true };
  });
  fastify.log.debug("Route '/' registered");
};

export default root;
