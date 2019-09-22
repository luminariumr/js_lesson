// Person constructor

function Person(firstName, LastName, dob) {
  this.firstName = firstName;
  this.LastName = LastName;
  this.birthday = new Date(dob);
  //   this.calculatAge = function() {
  //     const diff = Date.now() - this.birthday.getTime();
  //     const ageDate = new Date(diff);
  //     return Math.abs(ageDate.getUTCFullYear - 1970);
  //   };
}

// Inherits the insde of the (by using prototype) constructor to use it on a function
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get Full name      ----- prototype is a property to create a method for the constructor
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.LastName}`;
};

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
  this.LastName = newLastName;
};

// Create Object using the Person constructor   --- Inside of the object doesn't change
const john = new Person("John", "Doe", "May 13 1995");
const jane = new Person("Jane", "Doe", "April 16 1998");
console.log(jane.getFullName());

//-- jane object still retains Doe lastName because .getMarried(new lastName) only changes on prototype
jane.getsMarried("Ferrer");
// jane how its own properties on the Person constructor
console.log(jane.getFullName());
// jane doesn't its own properties due it being only a prototype
console.log(jane.hasOwnProperty("getFullName"));
