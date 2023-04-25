// N.B. Overloadeded functions in TypeScript don't work like most other languages!
// You would normally expect to see two function declarations with different implementations depending on its parameters
// This is not how it works here, because JavaScript does not support overloading under the hood, so TypeScript is working around it

// TypeScript lets you define overloaded functions:
// - Multiple functions with the same name, but different arguments
// - The number or type of arguments must be different

// First, specify the function signatures you want to support:

// Overload #1
function secondsToMidnight(secs: number): number;

// Overload #2
function secondsToMidnight(h: number, m: number, s: number): number;

// Then define a single function that satisfies all signatures:

// Implementation
function secondsToMidnight(secsOrH: number, m?: number, s?: number): number {
  const NUM_SECS_IN_DAY = 60 * 60 * 24;
  // If it has been called without minutes and seconds, they must have given us seconds only
  if (m === undefined || s === undefined) {
    return NUM_SECS_IN_DAY - secsOrH;
  }
  // Otherwise they must have given us hours, minutes and seconds
  else {
    return NUM_SECS_IN_DAY - (secsOrH * 60 * 60 + m * 60 + s);
  }
}

console.log(secondsToMidnight(82_800)); // 23:00:00
console.log(secondsToMidnight(23, 49, 59)); //23:49:59

// This won't work:
// console.log(secondsToMidnight(23, 55));
