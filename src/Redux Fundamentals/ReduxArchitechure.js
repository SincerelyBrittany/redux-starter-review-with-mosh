/*
In Redux, we store our application state inside a single JS object called the store.
The store is the single source of truth for our application state and is accessible by all parts of the UI
What we have the storeisentirely up to the developer. You can use anything that represents the data that the application needs to function
We can not directly modify or mutate the store because Redux is built on top of functional programming principles 

*/

const store = {
  categories: [],
  products: [],
  name: "",
  cart: {},
  user: {},
};

// Remember, in functional programming we do not mutate state, so we can not write code like this:

store.currentUser = { name: "SincerelyBrittany" };

//Store is an immutable object. So to update it, we should create a function that takes the store as an argument and returns the updated store

```
function reducer(store) {
  const updated = { ...store }; // spread operator creates copy of the store
}
```

// A reducer is a function that takes the current instance of the store and returns the updated store.

// QUESTION: How does the reducer know what properties in the store it should update? An action!

//An action is just a plain JS object that describes what just happened.
// Examples of an action of a user logging in, logging out, adding an object to the shopping cart, etc

//So the reducer should take the store as the second parameter

function reducer(store, action) {
  const updated = { ...store }; // spread operator creates copy of the store
}
