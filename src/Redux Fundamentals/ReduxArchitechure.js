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
```;

// A reducer is a function that takes the current instance of the store and returns the updated store.

// QUESTION: How does the reducer know what properties in the store it should update? An action!

//An action is just a plain JS object that describes what just happened.
// Examples of an action of a user logging in, logging out, adding an object to the shopping cart, etc

//So the reducer should take the store as the second parameter and based on the type of action, the reducer will know what properties of the state to update

function reducer(store, action) {
  const updated = { ...store }; // spread operator creates copy of the store
}

```
const store = {
  categories: [],
  products: [],
  name: "",
  cart: {},
  user: {},
};
```;

// Each reducer will be responsible for updating a specific slice of the store. So categories may have a reducer, and cart may have another reducer.
// Think of it was a manager in charge of  each department.

// STORE - Single JS object that includes our applications state
// ACTIONS - Plain Javascript objects that represent what just happened.
// REDUCERS - One or more reducer, which are each responsible for updating a slice of the store
//Reducers are pure functions so they dont touch global state, they dont mutate their arguments and they dont have any side effects
//REducers just get the current state and return the updates ones

/*
How does the store, action, and reducer work together?

1. When a user performs an action, like adding an item to the shopping cart. We create an action object and dispatch it.
2. The store object has a dispatch method that takes an action, it will then forward this action to the reducer
3. We do not call the reducer directly, we just work with the store. THE STORE IS IN CHARGE OF CALLING THE REDUCER.
4. THe reducer computes the new state and returns it. 
5. Next the store will set the state internally and then notify the UI components about the update/
6. The UI components will then pull out the updated data and refresh theselves. 

*/
