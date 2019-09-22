const name = "John";
const age = 31;
const job = "Web Developer";
const city = "Pasig";
let html;

// Without template string (es5)

// html =
// '<ul><li>Name: ' +
// name +
// '</li><li>Age: '+
// age +
// '</li><li>Job: '+
// job +
// '</li><li>City: '+
// city +
// '</li></ul>';

function hello() {
  return "hello";
}

// With template strings (ES6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? "Over 30" : "Under 30"} 
    </ul>
`; // last list item has the same function as if/else statement but with ES6 template used
document.body.innerHTML = html;
