// In Javascript functions are first class citizens

// We can treat them like any other variables.

function sayHello() {
  return "hello world";
}

let fn = sayHello;
fn();

function greet(fnMessage) {
  console.log(fnMessage);
}

greet(sayHello);

function returnAnonymous() {
  return function () {
    return "Hello World";
  };
}

let returnFunction = returnAnonymous();
let message = returnFunction;

// In Javascript we can assign a function to a variable.
// We can pass in a function as an argument.
// We can also return a function from another function.

// Remember that we can pass a function in as an argument and return it.
