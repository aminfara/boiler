import { getServer } from "./app.js";

const server = await getServer({ logger: { level: "debug" } });

try {
  await server.listen({ port: 8080 });
} catch (err) {
  console.error(err);
  process.exit(1);
}
