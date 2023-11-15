import fastify, { FastifyServerOptions } from "fastify";
import { registerPlugins } from "./plugins/index.js";

export async function getServer(options: FastifyServerOptions) {
  const f = fastify({ logger: true, ...options });

  await registerPlugins(f);

  // TODO: extract
  f.get("/ping", async (_request, _reply) => {
    return "pong\n";
  });

  return f;
}
