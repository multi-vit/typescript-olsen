// You can specify default values for parameters
// Where there is no default value, it makes the parameter required
// Default parameters normally come after required parameters
// In this function, the "basic" parameter is always required

function calculateTotalSalaryWithDefaultParams(
  basic: number,
  bonus: number = 5,
  director: boolean = false
): number {
  let earnings: number = basic + bonus;
  if (director) {
    earnings *= 2;
  }
  return earnings;
}

// So this is ok and will use bonus = 5 and director = false
console.log(calculateTotalSalaryWithDefaultParams(20));
// This is ok, will override the default bonus value to make it 10, and will use director = false
console.log(calculateTotalSalaryWithDefaultParams(20, 10));
// This is ok and will override both bonus and director
console.log(calculateTotalSalaryWithDefaultParams(20, 10, true));

// This won't work:
// console.log(calculateTotalSalaryWithDefaultParams())

// You can use undefined to use the default value for a parameter whilst editing further default parameters, but this is unusual
// So this sets bonus to 5 as per the default but overrides the director boolean to true
console.log(calculateTotalSalaryWithDefaultParams(20, undefined, true));
