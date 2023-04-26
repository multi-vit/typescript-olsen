// A class can implement multiple interfaces

interface LoggableInterface {
  log(msg: string): void;
}

interface Serialisable {
  serialise(): void;
}

// Still don't technically need the implements clause here
// But consider readability if implementing multiple interfaces!
class MultipleInterfaceClass implements LoggableInterface, Serialisable {
  log(msg: string) {
    console.log(`MyClass.log() is logging message: ${msg}`);
  }
  serialise() {
    console.log(`MyClass.log() is serialising`);
  }
}

let newMultipleInterfaceClass = new MultipleInterfaceClass();
newMultipleInterfaceClass.log("Hello world!");
newMultipleInterfaceClass.serialise();
