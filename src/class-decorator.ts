function LogClass(constructor: Function) {
    console.log(`Class Decorator: ${constructor.name}`);
}

@LogClass
class ExampleClass {
    constructor() {
        console.log("Instance created");
    }
}

// Output:
// Class Decorator: ExampleClass
// Instance created


const exampleClass = new ExampleClass();