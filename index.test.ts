import { describe, it, expect } from "vitest";
import { testFunc1 } from "./index";

describe("index", () => {
  it("testFunc1", () => {
    expect(testFunc1(1, 2)).toBe(3);
    expect(1).toBe(1);
  });
});
