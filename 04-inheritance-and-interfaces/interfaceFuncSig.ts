// An interface can specify a function signature
// Define an anonymous function inside the interface:

interface Predicate {
  // Any function of this type must take a number as a parameter and return a boolean
  (arg1: number): boolean;
}

function findIndex(array: number[], f: Predicate) {
  for (let i = 0; i < array.length; i++) {
    if (f(array[i])) return i;
  }
  return -1;
}

// Finding if there is an even number and return its index (or -1 if not found)
let i1 = findIndex([3, 12, 19, 1, 2, 7], (n) => n % 2 === 0);
// Finding if there is a number divisible by 5 and returning its index (or -1 if not found)
let i2 = findIndex([3, 12, 19, 1, 2, 7], (n) => n % 5 === 0);

console.log(i1);
console.log(i2);
