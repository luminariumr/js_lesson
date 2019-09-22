// BUILD IN CONSTRUCTOR
// STRING

const name1 = "Jeff";

const name2 = new String(name1); // object
console.log(name2);

if (name2 === "Jeff") {
  console.log("Yes");
} else {
  console.log("No");
}

// NUMBER
const num1 = 5;
const num2 = new Number(5); // object

console.log(num2);

// BOOLEAN
const bool1 = true;
const bool2 = new Boolean(bool1);

console.log(bool2);

// FUNCTION
const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return x + y");

console.log(getSum2(2, 2));

// OBJECT
const john1 = { name: "john" };

const john2 = new Object({ name: "john" });
console.log(john2);

// ARRAYS
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr2);
