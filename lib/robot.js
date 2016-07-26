'use strict';
const directions = ['north', 'south', 'east', 'west'];
class Robot {
  constructor(coordinates ,direction) {
    this.coordinates = coordinates;
    this.direction = direction;
  }

  orient(direction) {
    if (!directions.includes(direction)) {
      throw new Error ('Invalid Robot Bearing')
    } else {
      this.direction = direction;
    }
  }

  turnRight() {
    switch (this.direction) {
      case 'east':
        this.direction = 'south';

        break;
      case 'south':
        this.direction = 'west';
        break;
      case 'west':
        this.direction = 'north';
        break;
      case 'north':
        this.direction = 'east';
        break;
    }
  }

  turnLeft() {
    switch (this.direction) {
      case 'east':
        this.direction = 'north';

        break;
      case 'south':
        this.direction = 'east';
        break;
      case 'west':
        this.direction = 'south';
        break;
      case 'north':
        this.direction = 'west';
        break;
    }
  }

  bearing() {
    return this.direction
  }

  at(x, y) {
    this.coordinates = [x, y];
  }

  advance() {
    switch (this.direction) {
      case 'east':
        this.coordinates[0] += 1;
        break;
      case 'south':
        this.coordinates[1] -= 1;
        break;
      case 'west':
        this.coordinates[0] -= 1;
        break;
      case 'north':
        this.coordinates[1] += 1;
        break;
    }
  }

  instructions(inst) {
    var instructions = inst.split('');
    var new_instructions = [];
    instructions.forEach(function(element) {
      switch (element) {
        case 'L':
          new_instructions.push('turnLeft');
          break;
        case 'R':
          new_instructions.push('turnRight');
          break;
        case 'A':
          new_instructions.push('advance');
          break;
      }
    });
    return new_instructions

  }

  place(placement) {
    this.at(placement["x"], placement["y"]);
    this.orient(placement["direction"]);
  }

  evaluate(robotInstructions) {
    var instructionList = this.instructions(robotInstructions);

    instructionList.forEach(execute, this);
    function execute(element) {
      this[element]()
    }

  }

}





