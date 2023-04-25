// You can specify optional values for parameters
// Append a ? after the parameter name
// Optional parameters MUST follow required parameters
// If an optional parameter is not passed in, it will be undefined
// So in the function, you must check if the parameter isn't undefined
// This means optional parameters have a union type of: "<declaredType> | undefined"
// Did you notice that default parameters are also effectively optional!?

function calculateTotalSalaryWithOptionalParams(
  basic: number,
  bonus: number = 5,
  director: boolean = false,
  offshoreSlushFund?: number
): number {
  let earnings: number = basic + bonus;
  // Could also use typeof
  if (offshoreSlushFund !== undefined) {
    earnings += offshoreSlushFund;
  }
  if (director) {
    earnings *= 2;
  }
  return earnings;
}

// So this is ok and will use bonus = 5, director = false and offshoreSlushFund = undefined
console.log(calculateTotalSalaryWithOptionalParams(20));

// You must pass all parameters if wanting to use optional parameter
console.log(calculateTotalSalaryWithOptionalParams(20, 10, false, 100));

// This still won't work:
// console.log(calculateTotalSalaryWithOptionalParams())

// You can use undefined to use the default value for a parameter whilst editing further default parameters, but this is unusual
console.log(
  calculateTotalSalaryWithOptionalParams(20, undefined, undefined, 20)
);
