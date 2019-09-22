const person = {
    firstName:'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'stevesmith@gmail.com',
    hobbies: ['music','sports'],
    address: {
        City: 'Pasig',
        Street: 'Traffic'
    },
    getBirthYear: function() {
        return 2019 - this.age;
    }
};
let val;

val = person;
// Get specific value
val = person.firstName;
val = person.lastName;
val = person.age;
val = person.email;
val = person.hobbies[1];
val = person.address.City;
val = person.address.Street;
val = person.getBirthYear();

console.log(val);

const people = [{name: 'John',age: 30},
                {name: 'James',age: 22},
                {name: 'Arthur',age: 45},
                ];

                // using for loop on objected arrays
for(let i = 0;i < people.length;i++) {
    console.log(people[i]);
}