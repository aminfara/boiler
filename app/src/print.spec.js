// FILEPATH: /Users/ali/Workplace/boiler/app/src/print.test.js
import { jest } from "@jest/globals";
import print from "./print.js";

describe("print", () => {
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

  it("should log the provided message to the console", () => {
    const message = "Hello, World!";
    print(message);
    expect(consoleLogSpy).toHaveBeenCalledWith(message);
  });
});
