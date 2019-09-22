// ES6 CLASSES
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    return (this.lastName = newLastName);
  }
  // if static.... can just use the class Name to use the static functions
  static addNumbers(x, y) {
    return x + y;
  }
}

// Instantiating objects
const patrick = new Person("Patrick", "Dando", "2-19-1995");

console.log(patrick.greeting());
patrick.getsMarried("Silver");
console.log(patrick);
console.log(patrick.greeting());
console.log(patrick.calculateAge());

console.log(Person.addNumbers(2, 3));
