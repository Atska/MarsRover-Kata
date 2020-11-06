const Coordinate = require("../src/coordinate.js");

describe("Coordinate", () => {
  const coordinate = new Coordinate(1, 2);
  it("initiates Coordinate with x and y value", () => {
    expect(coordinate.x).toBe(1);
    expect(coordinate.y).toBe(2);
  });
});
