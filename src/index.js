import{ compose, pipe } from 'lodash/fp'

// Function Composition

//The idea of functionalprogramming is to write a bunch of small reusuable functions and then
//compose them to build more complex functions for solving real-world problems

//Example:

let input = "   Javascript   ";
//Lets say we want to get the input, trim it, and then wrap it inside a div element

// non functional style of code.
let output = "<div>" + input.trim() + "</div>";

// functional style of code.
//trim
//wrapinDiv
//uses two small reusuable functions instead
const trim = (str) => str.trim();
// const wrapinDiv = (str) => "<div>" + str + "</div>";
const wrapinDiv = (str) => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

let result = wrapinDiv(toLowerCase(trim(input)))


// Composing and Piping 
// https://lodash.com/ - Popular utility site for javascript 
// npm i lodash
