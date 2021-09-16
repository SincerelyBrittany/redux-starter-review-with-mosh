import store from "./Redux Fundamentals/StoreExample";

//Subscribing to a store - before dispatching an action.
const unsubscribe = store.subscribe(() => {
  //this function gets called everytime the state of the store gets changed
  console.log("Store changed!", store.getState());
});

console.log(store.getState());

store.dispatch({
  type: "ADD_BUG",
  payload: {
    description: "Bug1",
  },
});

console.log(store.getState());
unsubscribe();
store.dispatch({
  type: "REMOVE_BUG",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
