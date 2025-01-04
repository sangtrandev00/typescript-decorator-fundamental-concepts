function LogClass(constructor: Function) {
    console.log("Class Decorator");
}

function LogProperty(target: any, propertyKey: string) {
    console.log(`Property Decorator: ${propertyKey}`);
}

function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`Method Decorator: ${propertyKey}`);
}

function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`Parameter Decorator: ${propertyKey}, index: ${parameterIndex}`);
}

@LogClass
class ExampleClass {
    //@ts-ignore
    @LogProperty
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    //@ts-ignore
    @LogMethod
    //@ts-ignore
    greet(@LogParameter message: string) {
        console.log(`Hello, ${message}`);
    }
}

// Output:
// Property Decorator: name
// Method Decorator: greet
// Parameter Decorator: greet, index: 0
// Class Decorator
