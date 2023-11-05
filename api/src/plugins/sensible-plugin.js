import sensible from "@fastify/sensible";
import fastifyPlugin from "fastify-plugin";

const fp = /** @type {typeof fastifyPlugin<sensible.SensibleOptions> } */ (fastifyPlugin);

export default fp(async (app, options) => {
  await app.register(sensible, options);
  app.log.debug(`Plugin 'sensible' registered`);
});
