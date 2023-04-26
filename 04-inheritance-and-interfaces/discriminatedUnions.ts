// Imagine you want an object to have one of several different sets of properties, based on circumstance
// e.g. consider the remuneration policy for an employee:
// A full-time employee has an annual salary
// A contractor has a daily rate

// You can define a discriminated union to ahieve this effect

// Define a separate interface to represent each distinct set of properties
// In each interface, define a commonly-named property to identify the scenario (this is a discriminator flag) - employeeType in the below example
// Then define a union type that merges these interfaces under a common type name - Remuneration in the below example

interface FullTimeRemuneration {
  // This is called a Literal type
  // A property that can only be one, unique value
  employeeType: "fulltime";
  annualSalary: number;
}

interface ContractRemuneration {
  // Same flag with a different, unique value
  employeeType: "contract";
  dailyRate: number;
}

type Remuneration = FullTimeRemuneration | ContractRemuneration;

// The remuneration parameter must be shaped like either FullTimeRemuneration or ContractRemuneration
function calcEffectiveSalary(remuneration: Remuneration) {
  if (remuneration.employeeType === "fulltime") {
    return remuneration.annualSalary;
  } else {
    return remuneration.dailyRate * 240;
  }
}

// Passing in an object shaped as FullTimeRemuneration
const salaryOne = calcEffectiveSalary({
  employeeType: "fulltime",
  annualSalary: 25000,
});
// Passing in an object shaped as ContractRemuneration
const salaryTwo = calcEffectiveSalary({
  employeeType: "contract",
  dailyRate: 200,
});

console.log(salaryOne);
console.log(salaryTwo);
