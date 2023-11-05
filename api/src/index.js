import { buildApp } from "./app.js";

// TODO: If node env development, use logger level debug else use info
const app = await buildApp({ logger: { level: "debug" } });

try {
  await app.listen({ port: 3000 });
} catch (error) {
  app.log.error(error);
  throw error;
}
