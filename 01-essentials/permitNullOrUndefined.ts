// If you do want to allow a variable to be possibly null or undefined, you can declare a union type as follows:

// city can be a string or null.
let city: string | null;
city = null;
city = "Swansea";

// country can be a string or undefined. This is the recommended option
let country: string | undefined;
country = undefined;
country = "Wales";

// postcode can be a string or null or undefined. This is unusual
let postcode: string | null | undefined;
postcode = null;
postcode = undefined;
postcode = "SA3 5BR";
