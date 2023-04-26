// You can define getters and setters to encapsulate access to properties
// Can also be a useful way to invent computed properties as an alternative to defining a method (isHigherTax)

class EmployeeWithGetAndSet {
  constructor(private _name: string, private _salary: number) {}

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName: string) {
    this._name = newName;
  }

  get salary() {
    return this._salary;
  }

  get isHigherTax() {
    return this._salary >= 50000;
  }
}

let employeeFive = new EmployeeWithGetAndSet("Frederick", 25000);
// TypeScript knows whether to use setter
employeeFive.name = "Fred";
console.log(
  // or getter
  `${employeeFive.name}, ${employeeFive.salary}, ${employeeFive.isHigherTax}`
);
