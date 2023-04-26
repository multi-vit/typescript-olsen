// TypeScript has the concept of read-only properties
// Declare it using the readonly modifier
// Must be initialised, can't be modified after

class Circle {
  readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

let myCircle = new Circle(10);
console.log(myCircle.radius);

// This won't work:
// myCircle.radius = 42;
