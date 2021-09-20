import * as actions from "./ActionTypes";

export const ADD_BUG = (description) => ({
    type: actions.ADD_BUG,
    payload: {
      description: "Bug1",
    },
  });


//   export const REMOVE_BUG = (description) => ({
//     type: actions.ADD_BUG,
//     payload: {
//       description: "Bug1",
//     },
//   });


export const RESOLVE_BUG = id => ({
    type: actions.RESOLVE_BUG,
    payload:  {id:id}
});
