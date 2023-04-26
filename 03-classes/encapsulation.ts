// It's good practice in OO to ensure data in classes is private

// You can qualify members with access modifiers
// public - accesible to anyone (this is the default)
// protected - accessible to this class plus subclasses
// private - accessible to this class only

// The long hand way of doing it is this:

class EmployeeWithPrivateFields {
  private name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}

let employeeThree = new EmployeeWithPrivateFields("Fezziwig", 20000);

// But don't bother writing it the long way, do it like this
// In a constructor, you can prefix parameter names with public, private or protected
// This is known as constructor property initialisation
// TypeScript generates code to declare and initialise properties

class EmployeeConstructorPropertyInitialisation {
  constructor(private name: string, private salary: number) {}
}

let employeeFour = new EmployeeConstructorPropertyInitialisation(
  "Tiny Tim",
  100
);
