// Create Element
const li = document.createElement("li");
// Add class
li.className = "collection-item";
// Add Id
li.id = "new-item";
// Add attribute
li.setAttribute("src", "New Item");
// Create text node and append
li.appendChild(document.createTextNode("Hello World"));
// Create new link element
const link = document.createElement("a");
// Add class
link.className = "delete-item secondary-content";
// Add icon html
link.innerHTML = '<i class="fa fa-remove">';
// Append link into li
li.appendChild(link);
// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);
console.log(link);
