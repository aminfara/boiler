import { getName } from "./get-name.js";

describe("getName", () => {
  it('should return "backend"', () => {
    expect(getName()).toBe("backend");
  });
});
