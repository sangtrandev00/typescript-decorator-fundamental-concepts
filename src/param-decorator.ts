function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`Parameter Decorator: ${propertyKey}, parameter index: ${parameterIndex}`);
}

class ExampleClass {
    // @ts-ignore
    greet(@LogParameter message: string) {
        console.log(message);
    }
}

// Output:
// Parameter Decorator: greet, parameter index: 0
