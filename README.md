# redux-starter-review-with-mosh

# Functional Programming 101

* In Javascript functions are first class citizens
+  We can treat them like any other variables.

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

* In Javascript we can assign a function to a variable.
* We can pass in a function as an argument.
* We can also return a function from another function.

* Remember that we can pass a function in as an argument and return it.

## Higher Order Functions
* Higher Order Functions - a function that takes a function as an argument or returns it or both
*  Instead of workingon string, numbers or booleans, it goes higher to operate on functions

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

* map is a higher order function because takes a function as an argument

```
let numbers = [1,2,3];
numbers.map(number => number \* 2)
```

* Another example is setTImeout - takes a function as an argument

```
setTimeout(() => console.log("Hello"), 1000)
```

## Function Composition

* The idea of functionalprogramming is to write a bunch of small reusuable functions and then
* compose them to build more complex functions for solving real-world problems

* Example:

```
let input = "   Javascript   ";
```
* Lets say we want to get the input, trim it, and then wrap it inside a div element

### non functional style of code.

```
let output = "<div>" + input.trim() + "</div>";
```

### functional style of code.
* trim
* wrapinDiv
* uses two small reusuable functions instead

```
const trim = (str) => str.trim();
//const wrapinDiv = (str) => "<div>" + str + "</div>";
const wrapinDiv = (str) => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

let result = wrapinDiv(toLowerCase(trim(input)))
```
