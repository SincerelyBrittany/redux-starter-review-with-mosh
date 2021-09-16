import * as actions from "./ActionTypes";

// export function ADD_BUG(description) {
//   return {
//     type: actions.ADD_BUG,
//     payload: {
//       description: "Bug1",
//     },
//   };
// }

export const ADD_BUG = (description) => ({
  type: actions.ADD_BUG,
  payload: {
    description: "Bug1",
  },
});
