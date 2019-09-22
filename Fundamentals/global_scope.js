// Global scope
var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function scope: ", a, b, c);
}
test();
console.log("Global scope: ", a, b, c);

if (true) {
  // Block Scope
} else {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("IF scope: ", a, b, c);
}
