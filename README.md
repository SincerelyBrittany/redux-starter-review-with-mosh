# redux-starter-review-with-mosh

# Functional Programming 101

- In Javascript functions are first class citizens

* We can treat them like any other variables.

```
function sayHello() {
  return "hello world";
}
```

```
let fn = sayHello;
fn();
```

```
function greet(fnMessage) {
  console.log(fnMessage);
}
```

```
greet(sayHello);
```

```
function returnAnonymous(){
    return function(){
    return "Hello World"
  }
}
```

```
let returnFunction = returnAnonymous()
let message = returnFunction
```

- In Javascript we can assign a function to a variable.
- We can pass in a function as an argument.
- We can also return a function from another function.

- Remember that we can pass a function in as an argument and return it.

## Higher Order Functions

- Higher Order Functions - a function that takes a function as an argument or returns it or both
- Instead of workingon string, numbers or booleans, it goes higher to operate on functions

```
function greet(fn){
  console.log(fn())
}
```

```
function sayHello(){
  return function(){
  return "Hello World"
 }
}
```

- map is a higher order function because takes a function as an argument

```
let numbers = [1,2,3];
numbers.map(number => number \* 2)
```

- Another example is setTImeout - takes a function as an argument

```
setTimeout(() => console.log("Hello"), 1000)
```

## Function Composition

- The idea of functionalprogramming is to write a bunch of small reusuable functions and then
- compose them to build more complex functions for solving real-world problems

- Example:

```
let input = "   Javascript   ";
```

- Lets say we want to get the input, trim it, and then wrap it inside a div element

### non functional style of code.

```
let output = "<div>" + input.trim() + "</div>";
```

### functional style of code.

- trim
- wrapinDiv
- uses two small reusuable functions instead

```
const trim = (str) => str.trim();
//const wrapinDiv = (str) => "<div>" + str + "</div>";
const wrapinDiv = (str) => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

let result = wrapinDiv(toLowerCase(trim(input)))
```

# Composing and Piping

// https://lodash.com/ - Popular utility site for javascript
// npm i lodash
//with compose and pipe we cam get rid of all the uncessary parentheses from the reult function

// const transform = compose(wrapinDiv, toLowerCase, trim)
const transform = pipe(trim, toLowerCase, wrapinDiv);
transform(input);

// compose is another example of a higher order function because it takes a bunch of functions and returns a new function that is the composition of all of the functions passed in
// no longer need the long result function, just pass in the input to transform with order for functions.

# Currying - Haskell Curry

// Wrapping a string inside a span element

const trim = (str) => str.trim();
const wrapinDiv = (str) => `<div>${str}</div>`;
const wrapinSpan = (str) => `<span>${str}</span>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrapinDiv);
transform(input);

/// wrapinDiv and wrapinSpan have similar code

```
const trim = (str) => str.trim();
const wrap = (type, str) => `${type}${str}${type}`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap);
console.log(transform(input));
```

- the log will output <javascript> undefined </javascript>
- why? because the pipe function essentially builds a pipeline, the output of each function in the pipele end up being the input of the next function
- so the output of the toLowerCase function is our input string in lowercase that get passed into the wrap function
- the wrap function takes two parameters, so the input gets passed in as the first argument(javscript === type) and the second argument is undefined

- WHat happens if we pass in "div" in the function

```
const trim = (str) => str.trim();
const wrap = (type, str) => `${type}${str}${type}`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));
```

- we get the error "expected a function"
  \*why? because every argument of the pipe function has to be function
- in this case we are calling the wrap function and give it "div" as the type of element so this is going to return a string
- we cannot pass a string in the pipe function because we can not build a pipeline with a bunch of functions and a string

```

// function add(a, b) {
//   return a + b;
// }

```

- Currying is a technique that allows us to take a function that has n arguments and convert it to a function that has a signle argument
- N => 1

```
function add(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = (a) => (b) => a + b; // (a,b) => a + b

// const add1 = add(1);
// add1(5)
add(1)(5);
```

// So every time we call the add1 function and give it a value it is going to add 1 to it.

// We can use currying to fix our issue

```
import { compose, pipe } from "lodash/fp";
let input = "   Javascript   ";
const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));
```

- Now wrap returns a function and takes one parameter

# Pure Functions

- Pure Functions

//This is not a pure function because every time we call it the Math.random function generates a new value do result of this function will change.

````
function myFunction(number) {
  return number * Math.random();
}
```

//This is a pure function because every time we call it and give it a number we always get double it.

````

function myFunction2(number) {
return number \* 2;
}

```

* Pure functions can not use
    * Random Valies
    * current date/time
    * can not read ot change global state like DOM elements, files, databases, and so on because if you rely on global state or change it, it can affect the result of the pure function.
    * No mutation of parameters - if you do, the result of the pure function can change. For example:

```

function isEligible(age){
return age > minAge; \* minAge is a global variable \* if you use global variable to determine if someone is eligible or not, the result of this function can change in the future \* to make this function pure you would have to pass in minAge as a parameter ( see isEligible2 )
}

```
function isEligible2(age, minAge) {
  return age > minAge; \* pure function becuase minAge is a parameter so everything this function needs should be specified in its parameter list
}
```

    * Not all functions in javascript are pure but redux has reducer functions that MUST be pure.

    * Benefits of Pure functions

- Self documenting, everything function needs is clearly specified
- Easily testable
- Concurrency
- Cacheable

# Immutability
