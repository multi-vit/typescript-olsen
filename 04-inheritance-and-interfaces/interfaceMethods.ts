// Most traditional use of interfaces are to define what methods you want an object to have

// Capitalise the interface name (Pascal Case)
interface Loggable {
  // Anything of Loggable type MUST have a method called "log"
  // That takes in a msg parameter of type string
  // And returns nothings
  log(msg: string): void;
}

// You can use the interface in function signatures
// It ensures an incoming object has the requisite methods

function useLoggableThing(loggable: Loggable) {
  loggable.log("Howdy"); // We can be sure loggable has a log() method
}

// Implementing an interface in an object literal.
let obj = {
  log(msg: string) {
    console.log(`Object literal is logging message: ${msg}`);
  },
};
useLoggableThing(obj);

// Implementing an interface in a class.
// Use the implements keyword
// But you can actually omit the implements clause here
// As the compiler can see your class has a log() method
// So it realises your class implements the Loggable interface
class MyClass implements Loggable {
  log(msg: string) {
    console.log(`MyClass.log() is logging message: ${msg}`);
  }
}
useLoggableThing(new MyClass());
