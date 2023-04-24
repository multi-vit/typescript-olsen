let birthday: [number, string];

birthday = [3, "December"];

let day: number = birthday[0];
let month: string = birthday[1];

// If we didn't explicitly type on line 1 and initialised there
// TS would infer an array where elements are either strings or numbers
// Instead of a tuple
// We don't need to explicitly type on lines 5 and 6

birthday[0] = 12;
// N.B. Tuples are mutable here!!! (Unlike other languages)
