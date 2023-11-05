import { sayHello } from "./say-hello.js";

describe("sayHello", () => {
  it('should return "Hello {name}!"', () => {
    const name = "John Doe";
    const result = sayHello(name);
    expect(result).toBe(`Hello ${name}!`);
  });

  it('should return "Hello World!" when no name is provided', () => {
    const result = sayHello();
    expect(result).toBe("Hello World!");
  });
});
