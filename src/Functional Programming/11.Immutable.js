import { Map } from "immutable";

// With map function we can create a map or hash map. Thats like our regular JS object, its a container for key value pairs
//but this map object that we get from the library is immutable

let book = { title: "Harry Potter" };

function publish(book) {
  book.isPublished = true;
}
publish(book);
console.log(book);

let book2 = Map({ title: "Harry Potter" });
console.log(book2); // if you look in the console you will see that this is not a regular book object, it has a bunch of weird properties
//If you want to get the title you have to use the get method
console.log(book2.get("title"), "THIS IS HOW YOU GET THE TITLE");
console.log(book2.toJS(), "THIS IS HOW YOU GET A PLAIN JS OBJECT");

function publishBook2(book2) {
  return book2.set("isPublished", true);
}
publishBook2(book2);
console.log(publishBook2(book2).toJS(), "publishedBook2");

// When practicing functional programming, we dont want to mutate objects
//So this is is where we use immutable.js. immmutable js provides a bunch of immutabel data structures
// so instead of using a plain JS object, we use data structures provided by imutable js

// terminal: npm install immutable
