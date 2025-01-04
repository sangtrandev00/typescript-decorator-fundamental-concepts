function LogProperty(target: any, propertyKey: string) {
    console.log(`Property Decorator: ${propertyKey}`);
}

class ExampleClass {

    //@ts-ignore
    @LogProperty
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Output:
// Property Decorator: name
