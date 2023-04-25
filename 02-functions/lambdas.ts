// TypeScript supports lambda expressions (aka arrow functions):
// - () contains the parameters (you can omit () if there is only 1 parameter)
// - => separates parameters from the lambda body
// - The lambda body is implicitly the return expression
// Remember you don't have to explicitly type the return if it can be inferred

const getFullName = (fn: string, ln: string): string => fn + " " + ln;

// You invoke a lambda expression like a regular function:
console.log(getFullName("Bob", "Cratchit"));

// There are a very few occasions where TypeScript can infer the type of lambda parameters
// forEach takes a function to apply to each element in an array
// TypeScript infers that names is an array of strings
// Therefore each name is definitely a string
// So in the lambda function we are passing to forEach, we don't need to type the name parameter
const names = ["Huey", "Louis", "Dewey"];
names.forEach((name) => console.log(name.toUpperCase()));
