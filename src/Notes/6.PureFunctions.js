// Pure Functions

// This is not a pure function because every time we call it the Math.random function generates a new value do result of this function will change.


function myFunction(number) {
  return number * Math.random();
}


//This is a pure function because every time we call it and give it a number we always get double it.



function myFunction2(number) {
return number * 2;
}



// Pure functions can not use
    // Random Valies
    // current date/time
    // can not read ot change global state like DOM elements, files, databases, and so on because if you rely on global state or change it, it can affect the result of the pure function.
    // No mutation of parameters - if you do, the result of the pure function can change. For example:



function isEligible(age){
return age > minAge; // minAge is a global variable \* if you use global variable to determine if someone is eligible or not, the result of this function can change in the future \* to make this function pure you would have to pass in minAge as a parameter ( see isEligible2 )
}


function isEligible2(age, minAge) {
  return age > minAge; 
  // pure function becuase minAge is a parameter so everything this function needs should be specified in its parameter list
}


    //Not all functions in javascript are pure but redux has reducer functions that MUST be pure.

    //Benefits of Pure functions

// Self documenting, everything function needs is clearly specified
// Easily testable
// Concurrency
// Cacheable