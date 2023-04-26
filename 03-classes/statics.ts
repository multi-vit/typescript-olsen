// You can define class-wide members
// They belong to the whole class, not to a particular instance
// Like a global variable that all instances share (imagine an interest rate in a bank account class, if it were the same for everyone)

// To define a class wide member:
// Prefix definition with static
// Can also define as public/protected/private
// Works for both properties and methods
// So could have a static deposit() method in the above bank account example

// To access a static member, prefix with class name

class EmployeeWithStatics {
  private static _taxThreshold = 50000;

  constructor(private _name: string, private _salary: number) {}

  get isHigherTax() {
    return this._salary >= EmployeeWithStatics._taxThreshold;
  }

  static get taxThreshold() {
    return EmployeeWithStatics._taxThreshold;
  }
}

console.log(`Tax threshold is ${EmployeeWithStatics.taxThreshold}`);
