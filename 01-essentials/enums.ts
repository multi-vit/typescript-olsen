// Enums are not an extension of JavaScript - this is unique to TypeScript!
// Enums are used to create sets of constants for use with variables and properties

enum Color {
  R = 1,
  G,
  B,
}
let c: Color = Color.R;

console.log(c);
console.log(Color.G);
console.log(Color.B);

// This is an example of a numeric enum
// We have initialised the first value with a number, but you don't have to
// Following members are auto-incremented (so Color.G == 2, Color.B == 3)
// You can also leave it blank and first value will be 0 by default

// You can also have String enums
// They are not auto-incremented
// Can be useful for debugging as they can describe meaning of their value over plain numbers
