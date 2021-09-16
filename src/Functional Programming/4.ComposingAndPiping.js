// https://lodash.com/ - Popular utility site for javascript
// npm i lodash
//with compose and pipe we cam get rid of all the uncessary parentheses from the reult function

import { compose, pipe } from "lodash/fp";
const transformExample1 = compose(wrapinDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrapinDiv);
transform(input);

// compose is another example of a higher order function because it takes a bunch of functions and returns a new function that is the composition of all of the functions passed in
// no longer need the long result function, just pass in the input to transform with order for functions.
