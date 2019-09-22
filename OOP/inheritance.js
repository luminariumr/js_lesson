// PROTOTYPE INHERITANCE OOP
// Person Constructor

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting Prototype

Person.prototype.greetPerson = function() {
  return `Greetings ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("Patrick", "Star");

console.log(person1.greetPerson());

// CUSTOMER CONSTRUCTOR
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// // INHERIT THE PERSON PROTOTYPE METHOD
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Patrick", "Star", "555-0002-0003", "Standard");

// Customer greeting function
Customer.prototype.greetCustomer = function() {
  return `Greetings ${this.firstName} ${this.lastName}. Your phone number is ${this.phone} and a membership of ${this.membership}`;
};

// Create customer with using customer greeting
const customer2 = new Customer("Paula", "Dee", "111-2222-3333", "Premium");

console.log(customer1);
console.log(person1);
console.log(customer2);
