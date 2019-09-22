// Basic use of function
// const sayHello = function () {
//     console.log('Hello Patrick');
// }

// Using arrow function
// const sayHello = () =>{
//     console.log('Hello Patrick')
// }

//sayhello();

// One line function does not need braces
// const sayHello = () => console.log("Hello Patrick");

// sayhello();

// One line returns

// const sayHello = () => {
//     return "Hello";
//   };
//   console.log(sayHello());

// const sayHello = () => "Hello";
// console.log(sayHello());

// Return object
// const sayHello = () => ({
//   msg: "Hello"
// });

// console.log(sayHello());

// Single parameter does not need parenthesis
// const sayhello = name => console.log(`Hello ${name}`);
// sayhello("Ssob");

// multiple parameters need parenthesis
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);
// sayHello("Megan", "Young");

// Using arrow function to objects
const user = ["Nathan", "John", "William"];
// const nameLenght = user.map(name => {
//   return name.length;
// });

//Shorter arrow function to objects
// const nameLenght = user.map(name => {
//   return name.nameLenght;
// });

//Shortest arrow function to objects
const nameLength = user.map(name => name.length);
console.log(nameLength);
