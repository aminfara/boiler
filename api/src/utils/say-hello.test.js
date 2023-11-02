import { jest } from "@jest/globals";
import { sayHello } from "./say-hello.js";

describe("sayHello", () => {
  /**
   * @type {{ mockRestore: () => void; }}
   */
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('should log "Hello {name}!" to the console', () => {
    const name = "John Doe";
    sayHello(name);
    expect(consoleLogSpy).toHaveBeenCalledWith(`Hello ${name}!`);
  });
});
