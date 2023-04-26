// You can add members to an existing interface
// This means interfaces can be extended

interface exampleExtendedInterface {
  a: string;
  f1(): void;
}

// Adding new property and method to the interface
interface exampleExtendedInterface {
  b: string;
  f2(): void;
}

// This effectively results in this:
/* interface exampleExtendedInterface {
    a: string;
    b: string;
    f1(): void;
    f2(): void;
} */

function exampleFunction(object: exampleExtendedInterface) {
  object.a;
  object.b;
  object.f1();
  object.f2();
}
