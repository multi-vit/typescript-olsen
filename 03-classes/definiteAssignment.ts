// If the TypeScript compiler is set to strict, it will insist properties are initilised
// So the following code will give a compiler error:

/* class Employee {
  name: string;
  salary: number;
} */

// To prevent this error, put ! after the property name
// This is called definite assignment
// It indicates you know the property will be initialised (somehow)

class Employee {
  name!: string;
  salary!: number;
}
