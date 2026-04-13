let helloWorld= function() {
    return function(...args:any[]): string {
        return "Hello World";
    }
}

// Test case
const greet = helloWorld();
console.log(greet()); // Output: "Hello World"   
console.log(greet("any", "arguments")); // Output: "Hello World"





