// Functions in TypeScript are similar to JavaScript, but:
// TypeScript allows you to declare parameter and return types
// TypeScript performs type-checking

// Syntax is:
// function <functionName> (<parameterName>: <parameterType>) : <functionReturnType(ifNotInferred)> {<function code>}

function calculateTotalSalary(
  basic: number,
  bonus: number,
  director: boolean
): number {
  let earnings: number = basic + bonus;
  if (director) {
    earnings *= 2;
  }
  return earnings;
}

console.log(calculateTotalSalary(20, 5, true));

// This is not ok:
// let salaryOne = calculateTotalSalary(20, 5)

// This is also not ok:
// let salaryTwo = calculateTotalSalary(20, 5, "true")

// You don't have to specify return type if TypeScript can infer it.
// The above function obviously returns a number and TypeScript can work that out
// So would actually be written as:

function calculateTotalSalaryWithoutReturnType(
  basic: number,
  bonus: number,
  director: boolean
) {
  let earnings: number = basic + bonus;
  if (director) {
    earnings *= 2;
  }
  return earnings;
}
