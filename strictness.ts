// TypeScript is not strict by default

// It assumes untyped variables are of type: any
function func(arg) {
  console.log(`func received ${arg}`);
}
func(42);

// It allows you to set variables to null or undefined. This will compile, although your IDE may be complaining, but won't work at runtime:
let name1: string = null;
console.log(name1.toLowerCase());

let name2: string = undefined;
console.log(name2.toLowerCase());

// For full strictness checks, use the --strict option:
// tsc --strict strictness.ts

// Or enable specific strictness checks, such as:
// tsc --noImplicitAny strictness.ts        Prevents implicit use of any
// tsc --strictNullChecks strictness.ts     Prevents variables accidentally being null or undefined
