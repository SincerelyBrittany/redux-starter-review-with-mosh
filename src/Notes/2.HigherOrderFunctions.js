// Higher Order Functions - a function that takes a function as an argument or returns it or both
// Instead of workingon string, numbers or booleans, it goes higher to operate on functions

function greet(fn) {
  console.log(fn());
}

function sayHello() {
  return function () {
    return "Hello World";
  };
}

// map is a higher order function because takes a function as an argument

let numbers = [1, 2, 3];
numbers.map((number) => number * 2);

// Another example is setTImeout - takes a function as an argument

setTimeout(() => console.log("Hello"), 1000);
