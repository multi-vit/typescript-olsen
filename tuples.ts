let bd: [number, string];

bd = [3, "December"];

let day: number = bd[0];
let month: string = bd[1];

// If we didn't explicitly type on line 1 and initialised there
// TS would infer an array where elements are either strings or numbers
// Instead of a tuple
// We don't need to explicitly type on lines 5 and 6
