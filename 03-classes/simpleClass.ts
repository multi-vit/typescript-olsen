// Just like JavaScript can do OOP, TypeScript extends on this
// Use the class keyword - convention is for PascalCase for the ClassName
// Define members using familiar OO syntax

class Employee {
  // TypeScript will demand these are initialised (see definiteAssignment.ts)
  // You can't just declare and type them like this:
  // name: string;
  name = "";
  salary = -1;
}

// You can create and use objects using familar JavaScript syntax

let employeeOne = new Employee();

employeeOne.name = "Scrooge";
employeeOne.salary = 42000;

console.log(`${employeeOne.name} earns ${employeeOne.salary}`);

// Members are public by default which is why we can access them here
// Can use the private or protected keywords to avoid this
