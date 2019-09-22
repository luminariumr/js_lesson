let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// get child node
val = list.childNodes;
val = list.childNodes[1];
val = list.childNodes[3].nodeName;
val = list.childNodes[3].nodeType;

/*
ON NODE TYPES:
    1 - element
    2 - attribute (deprecated)
    3 - text node
    8 - comment
    9 - document itself
    10 - DOCTYPE
*/

// Get children element node
val = list.children;
val = list.children[2];
val = list.children[3].nodeName;
val = list.children[1].textContent = "children content changed";

// Children of children
val = list.children[3].children[0].id = "children of children linkage"; //changing of a children of a children's id element
// First child
val = list.firstChild;
val = list.firstElementChild;
// Last child
val = list.lastChild;
val = list.lastElementChild;
// Count child element
val = list.childElementCount;
// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;
console.log(val);
