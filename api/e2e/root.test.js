import { buildApp } from "../src/app.js";
import { sayHello } from "../src/utils/say-hello.js";

describe("root", () => {
  /** @type {import("fastify").FastifyInstance} */
  let app;

  beforeAll(async () => {
    // TODO: Can we share the app instance between tests?
    app = await buildApp();
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should return a message", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/",
    });
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(JSON.parse(response.body)).toEqual({ message: sayHello() });
  });
});
