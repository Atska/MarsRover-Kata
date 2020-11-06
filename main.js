const Rover = require("./src/rover.js");

function main() {
  //Rover 1
  let location = { x: 1, y: 2 };
  let plateau = { width: 5, height: 5 };
  let direction = "N";
  let command = "LMLMLMLMM";
  let rover1 = new Rover(location, plateau, direction);
  console.log(rover1.parseCommands(command));

  //Rover 2
  location = { x: 3, y: 3 };
  direction = "E";
  command = "MMRMMRMRRM";
  const rover2 = new Rover(location, plateau, direction);
  console.log(rover2.parseCommands(command));
}

main();
