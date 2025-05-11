// https://leetcode.com/problems/create-hello-world-function/ - TypeScript

// Function syntax
var createHelloWorld = function() {
    return function(): string {
        return "Hello World";
    }
};

// Arrow syntax
var createHelloWorld = function() {
    return () => "Hello World";
};

// Arrow syntax + rest arguments
var createHelloWorld = function() {
    return (...args: any[]) => "Hello World";
};
