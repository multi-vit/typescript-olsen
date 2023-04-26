// An interface can specify an array type
// Define an anonymous array inside the interface
// Specify index type (number/string) and value type

interface StringArray {
  [index: number]: string;
}

// Example usage:
let cities: StringArray = {};
cities[0] = "Oslo";
cities[1] = "London";
cities[2] = "Copenhagen";
console.log(cities[2]);

// This example shows how to use a string index type
// Effectively, it's a key-value dictionary
interface StringDictionary {
  [index: string]: string;
}

// Example usage:
let capitalCities: StringDictionary = {};

capitalCities["Norway"] = "Oslo";
capitalCities["UK"] = "London";
capitalCities["Denmark"] = "Copenhagen";

console.log(capitalCities["Norway"]);

// You can also have readonly arrays! This removes methods like push() from the array

// Could also do:
// function doStuff(values: readonly string[]) {
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice(1);
  console.log(`The first value is ${values[0]}`);
  console.log(copy);

  // ...but we can't mutate 'values'.
  // values.push("hello!");
  // Property 'push' does not exist on type 'readonly string[]'.
}

doStuff(["hi", "i'm", "the", "problem", "it's", "me"]);
