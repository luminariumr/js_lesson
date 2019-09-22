// difference of var, let, const
/* var= variable, can make a single variable 
    into a function holder
    let = a variable that can change it's holding
    const = a variable with a constant/ unchangeable holding 
*/ 

// var name = 'John Doe';
// console.log(name);
// name = 'Jane Doe';
// console.log(name);

// init = initialize variables

var greeting;
console.log(greeting);
greeting = 'hello';
console.log(greeting);

// variable with letters, numbers, _, $
//  var Can not start with number

// Multi word vars
var firstName = 'John'; // Camel case
var first_name= 'Jane'; // Underscore
var Firstname = 'Tom';  // Pascal Case

var firstName;

// LET

// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Jane Doe';
// console.log(name);

// CONST

// const name = 'John';
// console.log(name);
// // can not reasign a value 
// name = 'jane';

const person = {
    name: 'John',
    age: 30
}

person.name = 'Jane';
person.age = 32;

console.log(person)
const numbers= [1,2,3,4,5];

numbers.push(6);
console.log(numbers);