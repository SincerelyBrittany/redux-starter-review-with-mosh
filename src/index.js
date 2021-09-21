import store from "./customStore";
import * as actions from "./actions";

//console.log(store.dispatch(actions.ADD_BUG("Bug 1")));
store.dispatch(actions.ADD_BUG("Bug 1"))
store.dispatch(actions.RESOLVE_BUG(1))