// You can define getters and setters to encapsulate access to properties
// Can also be a useful way to invent computed properties as an alternative to defining a method (isHigherTax)
var EmployeeWithGetAndSet = /** @class */ (function () {
    function EmployeeWithGetAndSet(_name, _salary) {
        this._name = _name;
        this._salary = _salary;
    }
    Object.defineProperty(EmployeeWithGetAndSet.prototype, "name", {
        get: function () {
            return this._name.toUpperCase();
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeWithGetAndSet.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeWithGetAndSet.prototype, "isHigherTax", {
        get: function () {
            return this._salary >= 50000;
        },
        enumerable: false,
        configurable: true
    });
    return EmployeeWithGetAndSet;
}());
var employeeFive = new EmployeeWithGetAndSet("Frederick", 25000);
// TypeScript knows whether to use setter
employeeFive.name = "Fred";
console.log(
// or getter
"".concat(employeeFive.name, ", ").concat(employeeFive.salary, ", ").concat(employeeFive.isHigherTax));
