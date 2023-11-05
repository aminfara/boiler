import { buildApp } from "./app.js";

const app = buildApp();

app.listen({ port: 3000 }, function (error, _address) {
  if (error) {
    app.log.error(error);
    throw error;
  }
});
