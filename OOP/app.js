// OBJECT LITERAL
// const person = {
//   name: "bob"
// };

// console.log(person.name);

// Person constructor
// function Person(name) {
//   this.name = "bob";
// }

// const bob = new Person();

// console.log(bob);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const bob = new Person("bob", 36);
// const john = new Person("john", 25);
// console.log(bob);
// console.log(john);

// CONSTRUCTOR AND THIS.KEYWORD
// PERSON CONSTRUCTOR

function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const bob = new Person("Bob", "1-10-1999");
const john = new Person("Aron", "10-20-1995");
console.log(john.calculateAge());
