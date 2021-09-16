import store from "./store";
console.log(store);
import * as actions from "./actionTypes"; //-- MOVE TO ACTION CREATORS FILE
import { ADD_BUG } from "./actionCreators";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

console.log(store.getState());

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
