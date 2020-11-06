const Plateau = require("../src/plateau.js");

describe("Plateau", () => {
  const plateau = new Plateau(5, 5);
  it("initiates Direction", () => {
    expect(plateau.height).toBe(5);
    expect(plateau.width).toBe(5);
  });

  it("checks if rover is out of bounds when going north", () => {
    let roverLocation = { x: 5, y: 5 };
    let isOutOfBound = plateau.isOutOfBound(roverLocation, "N");
    expect(isOutOfBound).toBe(true);
    isOutOfBound = plateau.isOutOfBound(4, 4);
    expect(isOutOfBound).toBe(false);
  });

  it("checks if rover is out of bounds when going east", () => {
    let roverLocation = { x: 5, y: 5 };
    let isOutOfBound = plateau.isOutOfBound(roverLocation, "E");
    expect(isOutOfBound).toBe(true);
    isOutOfBound = plateau.isOutOfBound(4, 4);
    expect(isOutOfBound).toBe(false);
  });

  it("checks if rover is out of bounds when going south", () => {
    let roverLocation = { x: 0, y: 0 };
    let isOutOfBound = plateau.isOutOfBound(roverLocation, "S");
    expect(isOutOfBound).toBe(true);
    isOutOfBound = plateau.isOutOfBound(1, 1);
    expect(isOutOfBound).toBe(false);
  });

  it("checks if rover is out of bounds when going west", () => {
    let roverLocation = { x: 0, y: 0 };
    let isOutOfBound = plateau.isOutOfBound(roverLocation, "W");
    expect(isOutOfBound).toBe(true);
    isOutOfBound = plateau.isOutOfBound(1, 1);
    expect(isOutOfBound).toBe(false);
  });
});
