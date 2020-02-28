// 1. Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMakerClass {
  constructor(arg) {
    this.length = arg.length;
    this.width = arg.width;
    this.height = arg.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    const formula = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    return formula;
  }
}

const cuboidClass = new CuboidMakerClass({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    super(args);
    constructor(arg) {
        this.length = arg.length;
        this.width = arg.width;
        this.height = arg.height;
      }
      volume() {
        return this.length * this.length * this.length;
      }
      surfaceArea() {
        const formula = 6 * (this.length * this.length);
        return formula;
      }
    
}