// FOR LOOP (declaration,argument,increment) {statement}

// for (let i = 0; i < 10;i++){
//     if (i === 2){
//         console.log('2 is my favorite number');
//         continue;   // continues the loop after the condition is met
//     }

//     if (i === 5){
//         console.log('Stop the loop');
//         break; // stops the loop after the condition is met
//     }
//     console.log('Number ' + i);
// }

// WHILE LOOP declaration ...if (argument) {statement....  increment}

// let a = 0;
// while (a < 10){
//     console.log('Number ' + a);
//     if (a === 8){
//         console.log('Stop at Number ' + a);
//         break;
//     }
//     a++;
// }

// DO WHILE declaration... do{statement...increment}while(argument)

// let b = 0;

// do {
//     console.log('Number' + b);
//     b++;
// }
// while (b<10)

// LOOP THROUGH ARRAY - BY USING FOREACH LOOP

const cars = ["Ford", "Chevy", "Honda", "Toyota"];

//  for (let i = 0;i < cars.length;i++){
//      console.log(cars[i]);
//  }

// FOREACH
// cars.forEach(function(car,index,array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

//ARRAY MAPPING

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Mark" },
//   { id: 4, name: "James" }
// ];

// const ids = users.map(function(user) {
//   return `Name: ${user.name}`;
// });
// console.log(ids);

// FOR IN LOOPS - looping for objects
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 36
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`); // ${x} is the property; ${user[x]} is the value
}
