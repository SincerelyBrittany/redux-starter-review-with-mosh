// Updating Objects

const person = { name: "Jim" };

// Using Immuatability - if you want to update the person.name you shouldnt do this person.name = "john"
// YOU SHOULD MAKE A COPY FIRST AND THEN UPDATE THE COPY
// There are two ways to do this

// First way - using object.assign method
const updated = Object.assign({}, person, { name: "Bob", age: 30 });
// console.log(updated);
//Object.assign method - we can copy the contents of any object to another object.
// The first argument, we pass an empty object, then we pass out personal object that we want to update
// Object.assign({}, person) -  everything is copied from the person object into the empty object providedin the Object.assign function
// the third argument is optional and allows you to supply object with update properties.

// Second way - spread operator
const person2 = { name: "Jim" };
const updated2 = { ...person, name: "Bob" }; // ...person copies all items in person object
// console.log(updated2);

//Both use a shallow copy
const person3 = {
  name: "John",
  address: {
    country: "USA",
    city: "Houston",
  },
};

// const updated3 = { ...person3, name: "James" };
// updated3.address.city = "New York";
// console.log(person3, updated3);

const updated3 = {
  ...person3,
  address: {
    ...person.address,
    city: "New York",
  },
  name: "James",
};

console.log(person3, updated3);
