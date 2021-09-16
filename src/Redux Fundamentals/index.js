import store from "./StoreExample";
import * as actions from "./ActionTypes"; //-- MOVE TO ACTION CREATORS FILE
import { ADD_BUG } from "./ActionCreators";

//Subscribing to a store - before dispatching an action.
const unsubscribe = store.subscribe(() => {
  //this function gets called everytime the state of the store gets changed
  console.log("Store changed!", store.getState());
});

console.log(store.getState());

/*
store.dispatch({
  type: actions.ADD_BUG,
  payload: {
    description: "Bug1",
  },
});

*/

store.dispatch(ADD_BUG("Bug 1"));

console.log(store.getState());
unsubscribe();
store.dispatch({
  type: actions.REMOVE_BUG,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
