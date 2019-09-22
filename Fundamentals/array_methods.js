// create arrays
const numbers = [23,34,15,76,4,60];
const numbers2 = new Array(41,63,12,77);
const fruit = ['Apple','Banana','Orange','Pear'];
const mixed = [22,'Hello',true,undefined,null,{a:1,b: 2},new Date()];

let val;

//  get array length
val = numbers.length;
//  check if it is array
val = Array.isArray(numbers2);
//  get single value
val = numbers[3];
//  insert into array
//numbers[2] = 100;

//  Find index of values
// val = numbers.indexOf(34);
// //  Mutating Arrays --- Add on to end
// numbers.push(250);
// // Mutating Arrays --- Add on front
// numbers.unshift(333)
// // Mutating Arrays --- Take off from the end
// numbers.pop();
// // Mutating Arrays --- Take off from the front
// numbers.shift();
// // Mutating Arrays --- Splice values
// numbers.splice(1,3);
// // Mutating Arrays --- Reverse the values
// numbers.reverse();
// // Mutating Arrays --- Concatenating array
val = numbers.concat(numbers2);
console.log(numbers);
// // Mutating Arrays --- Sorting array
val = fruit.sort();
console.log(fruit);
val = numbers.sort();
console.log(val);
// // Mutating Arrays --- Using 'compare function'
val = numbers.sort(function(x,y) {return x - y});
console.log(val);
// // Mutating Arrays --- Reverse sorting
val = numbers.sort(function(x,y) {return y - x});
// // Mutating Arrays --- Finding inside arrays
function over50(num){
    return num > 50;
}
val = numbers.find(over50)
console.log(val);