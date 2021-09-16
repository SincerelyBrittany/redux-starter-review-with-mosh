// Designing the Store

// Define the actions
// 1. Add a Bug
// 2. Mark as Resolved
// 3. Delete a bug

// An action is just a plain JS object that describes what just happened, for example:

```
let action = {
  type: "ADD_BUG",
  description: "...",
};
```;
//TYPE is the only action that REDUX EXPECTS in your action objects. So if you do not have this type property, redux will complain.
// In the example above we are using a string as the type property but we can use any other type that is serializable.

/*
REDUX WAS INSPIRED BY FLUX WHICH IS AN ARCHitectural pattern and a libray built by FB.
In flux, actions have a slight different structure. THey have two properties type and payload. 
Payload is an object that contains all the data about an action. You do not have to follow this structure in 
REDUX but many people do because it fives actions a commmon and consistent structure 

*/

let action = {
  type: "ADD_BUG",
  payload: {
    id: 1,
    description: "...",
  },
};
