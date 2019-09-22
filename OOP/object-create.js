// USING Object.create

// create own property function
const personPrototype = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    return (this.lastName = newLastName);
  }
};
// creating object for mary to use personPrototype property function
const mary = Object.create(personPrototype);

// adding name on mary
mary.firstName = "Mary";
mary.lastName = "Hampton";
// changing lastName of mary
mary.getsMarried("Star");

console.log(mary);

const bob = Object.create(personPrototype, {
  firstName: { value: "Louie" },
  lastName: { value: "Lineses" },
  age: { value: 36 }
});

console.log(bob.greeting());
console.log(bob.getsMarried("MCgregor"));
