import * as actions from "./actionTypes";

export const ADD_BUG = (description) => ({
    type: actions.ADD_BUG,
    payload: {
      description: description,
    },
  });


  export const REMOVE_BUG = (description) => ({
    type: actions.REMOVE_BUG,
    payload: {
      description
    },
  });


export const RESOLVE_BUG = (id) => ({
  type: actions.RESOLVE_BUG,
  payload: { id: id },
});
