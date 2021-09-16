// Updated Arrays

const numbers = [1, 2, 3];

//Adding
const addedToTheEnd = [...numbers, 4];
const addedToTheBeginning = [4, ...numbers];
const index = numbers.indexOf(2);
// First copy all the items before the number 2, to do that we must use the slice method.
const numbersBefore2 = [...numbers.slice(0, index), 4, ...numbers.slice(index)]; // returns a new array
console.log(numbersBefore2);

//Removing
const removed = numbers.filter((n) => n !== 2);
console.log(removed);

//Updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
//if you had an array of objects here, instead of returning the number 20, you would have to copy that object. So we would have to use the spread operator to take a full copy of that object
console.log(updated, "this is updated ");
