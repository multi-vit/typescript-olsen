class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  // Add methods in the usual way
  payRise(amount: number) {
    this.salary += amount; // Remember to always use "this" to refer to variables in the class
  }

  isHigherTax() {
    // Type inference of a boolean
    return this.salary >= 50000;
  }
}

let newEmployee = new Employee("Bumble", 10000);
newEmployee.payRise(5000);
console.log(newEmployee.salary);
console.log(`Higher tax rate? ${newEmployee.isHigherTax()}`);
