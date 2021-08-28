const Direction = require("../src/direction.js");

describe("Direction", () => {
  const direction = new Direction("N");
  it("checks if the value of direction is N", () => {
    expect(direction.value).toBe("N");
  });
});
