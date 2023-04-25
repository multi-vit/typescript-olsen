// A common way to initialise properties is via a constructor
// This avoids the definite assignment problem (see definiteAssignment.ts) whilst allowing properties to be declared without initialising
// Define a method named constructor
// Automatically invoked when you create an object

class Employee {
  // If you were to initialise values here, they would be immediately overwritten by the constructor
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name; // Must use "this" to access members
    this.salary = salary;
  }
}

let employeeTwo = new Employee("Marley", 43000);
console.log(`${employeeTwo.name} earns ${employeeTwo.salary}`);

// You can combine using the constructor to set certain values upon construction and having some values set by default
