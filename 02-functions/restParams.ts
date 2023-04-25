// You can define variadic functions via rest parameters:
// - Define an array parameter and precede its  name with the spread operator: ...
// - Must be at the end of the parameter list
// - They always get accumulated in to an array of strings

function getFullName(firstName: string, ...otherNames: string[]) {
  if (otherNames.length === 0) {
    return firstName;
  } else {
    // Join the array of strings together with a space in between
    return firstName + " " + otherNames.join(" ");
  }
}

// If you pass in just one name, the rest parameter array will be 0 and therefore unused
console.log(getFullName("Adele"));

// It doesn't matter how many extra arguments you pass in, they will be spread in to an array
console.log(getFullName("Montgomery", "Moses", "Brian", "Baron", "Cohen"));
