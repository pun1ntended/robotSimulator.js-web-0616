'use strict';
const directions = ['north', 'south', 'east', 'west'];
class Robot {
  constructor(coordinates ,bearing) {
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  orient(direction) {
    if (!directions.includes(direction)) {
      throw new Error ('Invalid Robot Bearing')
    } else {
      this.bearing = direction;
    }
  }

  turnRight() {
    switch (this.bearing) {
      case 'east':
        this.bearing = 'south';

        break;
      case 'south':
        this.bearing = 'west';
        break;
      case 'west':
        this.bearing = 'north';
        break;
      case 'north':
        this.bearing = 'east';
        break;
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case 'east':
        this.bearing = 'north';

        break;
      case 'south':
        this.bearing = 'east';
        break;
      case 'west':
        this.bearing = 'south';
        break;
      case 'north':
        this.bearing = 'west';
        break;
    }
  }


  at(x, y) {
    this.coordinates = [x, y];
  }

  advance() {
    switch (this.bearing) {
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
    this.orient(placement["bearing"]);
  }

  evaluate(robotInstructions) {
    var instructionList = this.instructions(robotInstructions);

    instructionList.forEach(execute, this);
    function execute(element) {
      this[element]()
    }

  }

}





