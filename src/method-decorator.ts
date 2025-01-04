
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method Decorator: ${propertyKey} was called with args:`, args);
        return originalMethod.apply(this, args);
    };
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class ExampleMethodDecoratorClass {
    sayHello(name: string) {
        console.log(`Hello, ${name}`);
    }
}

const example = new ExampleMethodDecoratorClass();
example.sayHello("Alice");

// Output:
// Method Decorator: sayHello was called with args: [ 'Alice' ]
// Hello, Alice
