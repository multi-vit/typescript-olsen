// You can specify a union type for a parameter
// Enables the caller to pass in different types of value
// You can use typeof to detect the actual type passed in
// You can also use a typeAlias to abstract the type such as:
// type StringOrNumber = string | number;
// And have
// function displayAgeNextBirthday(ageParam: StringOrNumber) {}

function displayAgeNextBirthday(ageParam: string | number) {
  let age: number;
  if (typeof ageParam === "string") {
    age = Number.parseInt(ageParam);
  } else {
    age = ageParam;
  }
  console.log(`Age next birthday: ${age + 1}`);
}

displayAgeNextBirthday("41");
displayAgeNextBirthday(41);

// N.B. This must be compiled to ES6 (ES2015) or later for parseInt to work
