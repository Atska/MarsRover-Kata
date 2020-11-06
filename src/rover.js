const Coordinate = require("./coordinate.js");
const Direction = require("./direction.js");
const Plateau = require("./plateau.js");

/**
 * Creates a Mars Rover
 * @property {Coordinate} location - Object with x and y key-values
 * @property {Direction} direction - Object value returns orientation (N, S, E, W)
 *  @property {Plateau} plateau - Object with width and height param && default x=0 and y=0
 */
class Rover {
  constructor(location, plateau, direction) {
    this.coordinate = new Coordinate(location.x, location.y);
    this.direction = new Direction(direction);
    this.plateau = new Plateau(plateau.width, plateau.height);
  }

  spin(val) {
    const left = { N: "W", W: "S", S: "E", E: "N" };
    const right = { N: "E", W: "N", S: "W", E: "S" };

    if (val === "L") this.direction.value = left[this.direction.value];
    if (val === "R") this.direction.value = right[this.direction.value];
    else return undefined;
  }

  move() {
    const { x, y } = this.coordinate;
    if (this.direction.value === "N") {
      if (this.plateau.isOutOfBound({ x, y }, "N")) this.wrapAround();
      else this.coordinate.y++;
    }
    if (this.direction.value === "E") {
      if (this.plateau.isOutOfBound({ x, y }, "E")) this.wrapAround();
      else this.coordinate.x++;
    }
    if (this.direction.value === "S") {
      if (this.plateau.isOutOfBound({ x, y }, "S")) this.wrapAround();
      else this.coordinate.y--;
    }
    if (this.direction.value === "W") {
      if (this.plateau.isOutOfBound({ x, y }, "W")) this.wrapAround();
      else this.coordinate.x--;
    }
  }

  wrapAround() {
    this.spin("R");
    this.spin("R");
  }

  parseCommands(commands) {
    for (const cmd of commands) {
      if (cmd === "M") this.move();
      if (cmd === "L" || cmd === "R") this.spin(cmd);
    }
    return [this.coordinate.x, this.coordinate.y, this.direction.value];
  }
}
module.exports = Rover;
