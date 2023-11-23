import fastify from "fastify";
import { AppOptions, app } from "./app.js";

const options: AppOptions = {
  logger: { level: "debug" },
};

const server = fastify(options);

await server.register(app, options);

try {
  await server.listen({ port: 8080 });
} catch (err) {
  console.error(err);
  process.exit(1);
}
