const { describe, it, expect } = require("@jest/globals");
const Rover = require("../src/rover.js");

describe("Rover", () => {
  const rover = new Rover({ x: 1, y: 2 }, { width: 5, height: 5 }, "N");
  const { coordinate, direction, plateau } = rover;

  it("initiates a rover with x and y coordinates", () => {
    expect(coordinate.x).toBe(1);
    expect(coordinate.y).toBe(2);
  });

  it("initiates a rover with a direction", () => {
    expect(direction.value).toBe("N");
  });

  it("initiates a plateau", () => {
    expect(plateau.height).toBe(5);
    expect(plateau.width).toBe(5);
  });

  it("spins the rover and changes its direction", () => {
    rover.spin("L");
    expect(direction.value).toBe("W");
    rover.spin("R");
    expect(direction.value).toBe("N");
  });

  it("moves the rover forward", () => {
    rover.move();
    expect(coordinate.y).toBe(3);
    expect(coordinate.x).toBe(1);
  });

  it("parses a string of commands and returns current location", () => {
    const currentLocation = rover.parseCommands("MRMLM");
    expect(currentLocation).toStrictEqual([2, 5, "N"]);
    expect(coordinate.x).toBe(2);
    expect(coordinate.y).toBe(5);
    expect(direction.value).toBe("N");
  });

  it("spins the rover around", () => {
    rover.wrapAround();
    expect(direction.value).toBe("S");
    rover.wrapAround();
  });

  it("spins the rover around if rover leaves the plateau", () => {
    rover.move();
    expect(direction.value).toBe("S");
  });
});
