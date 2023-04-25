// A common way to initialise properties is via a constructor
// This avoids the definite assignment problem (see definiteAssignment.ts) whilst allowing properties to be declared without initialising
// Define a method named constructor
// Automatically invoked when you create an object

class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

let employeeTwo = new Employee("Marley", 43000);
console.log(`${employeeTwo.name} earns ${employeeTwo.salary}`);
