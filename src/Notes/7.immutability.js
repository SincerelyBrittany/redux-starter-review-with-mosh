// Immutability - means once we create an object, it cannotbe changed/mutated.
// If you want to change an object you have to take a copy first and then change that copy.

//For example, strings in most programming languages are immutable

let name = "Sincerely Brittany"; // String 1
let newName = name.toUpperCase(); // This is a new string - the original string is not effected directly

let book = {};
book.title = "...";

//objects on arrays are not immutable
// Javascript is not a functional programming language
//In functional programming language we cannot mutate data

//but in javascript, we can mutate objects and arrays

// When you use const, you are not created an immutable object, you can still change its title property with constant, we can not reassign book to a different object
// const prevents reassignment

const book2 = {};
book2.title = "...";

/* Benefits of immutability

1. Predictability - if you call a functiona and pass an object into it we know that object is not going to be changed
2. Faster to detect changes - example react rendering 
3. Concurrency - safely run function in parallel 

*/

/* Cons of immutability

1. Performance - if you have too many objects 
2. Memory overhead - Structural sharing 

*/

//If you are building projects with redux you should not mutate data because thats a fundamental principle in redux.
//Outside redux you can do whatever.
