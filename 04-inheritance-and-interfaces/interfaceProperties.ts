// You can define an interface to specify properties that you want an object to have
// This is similar to type aliasing in 02-functions/typeAliases.ts
// It's personal preference as both are very similar - key distinction is that types cannot be re-opened to add new properties like an interface can
// A good rule of thumb is that Interfaces are more for data structures (e.g. objects)
// Types are more for primitive (e.g. boolean, number)

interface Shape {
  centreX: number;
  centreY: number;
  width: number;
  // Can have optional properties as you would expect
  height?: number;
}

// You can use the interface in function signatures
// Ensures an incoming object has the requisite properties

function drawShape(shape: Shape) {
  if (shape.height === undefined) {
    console.log(
      `Origin ${shape.centreX}, ${shape.centreY}, width and height ${shape.width}`
    );
  } else {
    console.log(
      `Origin ${shape.centreX}, ${shape.centreY}, width ${shape.width}, height ${shape.height}`
    );
  }
}

let square = { centreX: 0, centreY: 0, width: 5 };
let rectangle = { centreX: 0, centreY: 0, width: 5, height: 10 };

drawShape(square);
drawShape(rectangle);

// Error:
// drawShape({centreX: 10, centreY: 20})
// drawShape({centreX: 10, centreY: 20, width: 100, colour: "red"})

// You can implement this interface in a class:

class Circle implements Shape {
  // Have to declare these as public otherwise TypeScript is unhappy
  constructor(
    public centreX: number,
    public centreY: number,
    public width: number
  ) {}
}

drawShape(new Circle(10, 20, 100));

class Rectangle implements Shape {
  // Have to declare these as public otherwise TypeScript is unhappy
  constructor(
    public centreX: number,
    public centreY: number,
    public width: number,
    public height: number
  ) {}
}

drawShape(new Rectangle(10, 20, 100, 200));
