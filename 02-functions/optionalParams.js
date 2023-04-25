// You can specify optional values for parameters
// Append a ? after the parameter name
// Optional parameters MUST follow required parameters
// If an optional parameter is not passed in, it will be undefined
// So in the function, you must check if the parameter isn't undefined
function calculateTotalSalaryWithOptionalParams(basic, bonus, director, offshoreSlushFund) {
    if (bonus === void 0) { bonus = 5; }
    if (director === void 0) { director = false; }
    var earnings = basic + bonus;
    // Could also use typeof
    if (offshoreSlushFund !== undefined) {
        earnings += offshoreSlushFund;
    }
    if (director) {
        earnings *= 2;
    }
    return earnings;
}
// So this is ok and will use bonus = 5, director = false and offshoreSlushFund = undefined
console.log(calculateTotalSalaryWithOptionalParams(20));
// You must pass all parameters if wanting to use optional parameter
console.log(calculateTotalSalaryWithOptionalParams(20, 10, false, 100));
// This still won't work:
// console.log(calculateTotalSalaryWithOptionalParams())
// You can use undefined to use the default value for a parameter whilst editing further default parameters, but this is unusual
// So this sets bonus to 5 as per the default but overrides the director boolean to true
console.log(calculateTotalSalaryWithOptionalParams(20, undefined, undefined, 20));
