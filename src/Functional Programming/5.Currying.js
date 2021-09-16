// Currying - Haskell Curry

// Wrapping a string inside a span element

/* 
Example 1: 
    const trim = (str) => str.trim();
    const wrapinDiv = (str) => `<div>${str}</div>`;
    const wrapinSpan = (str) => `<span>${str}</span>`;
    const toLowerCase = (str) => str.toLowerCase();

    const transform = pipe(trim, toLowerCase, wrapinDiv);
    transform(input);
*/

/// wrapinDiv and wrapinSpan have similar code

/* Example 2 
const trim = (str) => str.trim();
const wrap = (type, str) => `${type}${str}${type}`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap);
console.log(transform(input));
*/

// the log will output <javascript> undefined </javascript>
// why? because the pipe function essentially builds a pipeline, the output of each function in the pipele end up being the input of the next function
// so the output of the toLowerCase function is our input string in lowercase that get passed into the wrap function
// the wrap function takes two parameters, so the input gets passed in as the first argument(javscript === type) and the second argument is undefined

// What happens if we pass in "div" in the function

/* Example 3
const trim = (str) => str.trim();
const wrap = (type, str) => `${type}${str}${type}`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));
*/

// we get the error "expected a function"
// why? because every argument of the pipe function has to be function
// in this case we are calling the wrap function and give it "div" as the type of element so this is going to return a string
// we cannot pass a string in the pipe function because we can not build a pipeline with a bunch of functions and a string

/* Example 4
function add(a, b) {
  return a + b;
}
*/

// Currying is a technique that allows us to take a function that has n arguments and convert it to a function that has a signle argument
// N => 1

function add(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = (a) => (b) => a + b; // (a,b) => a + b

// const add1 = add(1);
// add1(5)
add(1)(5);

// So every time we call the add1 function and give it a value it is going to add 1 to it.

// We can use currying to fix our issue

import { compose, pipe } from "lodash/fp";
let input = "   Javascript   ";
const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));

// Now wrap returns a function and takes one parameter
