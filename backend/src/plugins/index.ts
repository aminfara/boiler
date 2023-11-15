import { FastifyInstance } from "fastify";
import { sensiblePlugin } from "./sensible.js";

export async function registerPlugins(f: FastifyInstance) {
  f.log.info("Registering plugins");

  await f.register(sensiblePlugin);
}
