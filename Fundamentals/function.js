// FUNCTION DECLARATION --- function keyword and after is a name

function greet(firstName = "John", lastName = "Doe") {
  if (typeof firstName === "undefined") {
    firstName = "John";
  }

  if (typeof lastName === "undefined") {
    lastName = "Doe";
  }

  console.log("hello");
  return "Hello " + firstName + " " + lastName;
}

console.log(greet());
// FUNCTION EXPRESSION --- function keyword before the variable name

const square = function(x = 5) {
  return x * x;
};
console.log(square());
// IMMIDIATELY INVOKABLE FUNCTION EXPRESS - IIFEs

(function() {
  console.log("IIFE Ran....");
})();

(function(name) {
  console.log("Hello " + name);
})("Bob");

// PROPERTY METHOD

// const todo = {
//     add:
// }
