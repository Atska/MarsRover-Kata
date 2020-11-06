/**
 * Creates the surface of the mars and a boundry of possible moves.
 * Default start values of x=0 and y=0
 * @property {number} width maximum width
 * @property {number} height maximum height
 */
class Plateau {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.startX = 0;
    this.startY = 0;
  }

  /**
   * Check if the next move is within the border of the plateau
   * @param {Object} roverLocation key-values x and y of the rover location
   * @param {String} direction (N, S, E, W) orientation of rover
   */
  isOutOfBound(roverLocation, direction) {
    let { y, x } = roverLocation;
    // if rover is heading to the direction and next move is out of bound -> true
    if (direction === "N" && y + 1 > this.height) return true;
    if (direction === "E" && x + 1 > this.width) return true;
    if (direction === "S" && y - 1 < this.startX) return true;
    if (direction === "W" && x - 1 < this.startY) return true;
    return false;
  }
}

module.exports = Plateau;
