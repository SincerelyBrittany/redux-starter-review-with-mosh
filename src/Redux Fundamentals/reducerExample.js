// reducer is a function with two parameters, the current state and an action
// The job of the reducer is to return the new state based on the action passed in.
// EXAMPLE

//import { ADD_BUG, REMOVE_BUG } from "./ActionTypes";
import * as actions from "./ActionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === actions.ADD_BUG)
    return [
      ...state,
      {
        id: ++lastId, //Our store is s simple array so if the user adds a book, we want to return a new array
        description: action.payload.description,
        resolved: false,
        //For the id we need to have some kind of counter
      },
    ];
  else if (action.type === actions.REMOVE_BUG)
    return state.filter((bug) => bug.id !== action.payload.id);

  return state;
}

//CAN ALSO USE A SWITCH AND CASE INSTEAD OF IF ELSE STATEMENT

// ```
// function reducer2(state = [], action) {
//   switch (action.type) {
//     case "ADD_BUG":
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case "REMOVE_BUG":
//       return state.filter((bug) => bug.id !== action.payload.id);
//     default:
//       state;
//   }
// }
// ```;
