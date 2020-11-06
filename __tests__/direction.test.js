const Direction = require("../src/direction.js");

describe("Direction", () => {
  const direction = new Direction("N");
  it("initiates Direction", () => {
    expect(direction.value).toBe("N");
  });
});
