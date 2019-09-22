const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");
const addInput = document.querySelector("#addBtn");
const clearBTN = document.querySelector("#clearBtn");
const collectionList = document.getElementById("ul_collection");
// clear input
taskInput.value = "";

// Keydown
// taskInput.addEventListener("keydown", runEvent);
// taskInput.addEventListener("keyup", runEvent);
// taskInput.addEventListener("keypress", runEvent);
// taskInput.addEventListener("focus", runEvent);
// taskInput.addEventListener("blur", runEvent);
// taskInput.addEventListener("cut", runEvent);
// taskInput.addEventListener("paste", runEvent);
// taskInput.addEventListener("input", runEvent);
taskInput.addEventListener("keydown", runEvent);
function runEvent(e) {
  // console.log(`Event Type: ${e.type}`);
  //Get Input value
  //console.log(taskInput);
  //e.preventDefault();
}

// GETTING SELECT USING MATERIALIZE (jQuery way)
// $(document).ready(function() {
//   $("select").formSelect();
// });

// ADDING NEW TASK
addInput.addEventListener("click", addTaskEvent);
function addTaskEvent(e) {
  const taskValue = document.querySelector("#task").value; // getting the value of the text
  const li = document.createElement("li"); // creating new li
  const ul = document.querySelector(".collection");
  li.className = "collection-item"; // adding class to the li
  li.appendChild(document.createTextNode(taskValue)); // showing the value on the node
  const link = document.createElement("a"); // adding a
  link.className = "delete-item secondary-content"; // adding class to link of a
  link.innerHTML = '<i class="fa fa-remove">'; // adding a btn to remove
  li.appendChild(link); //  putting link inside li
  ul.appendChild(li); // putting li inside ul
}

// CLEAR TASK
clearBTN.addEventListener("click", clearTaskEvent);
function clearTaskEvent(e) {
  const ulList = document.querySelector("ul.collection"); // getting the ul collection
  if (confirm("Delete all Tasks?")) {
    // child remover
    while (ulList.childElementCount != 0) {
      ulList.removeChild(ulList.firstChild);
      // console.log(ulList);
    }
  }
  e.preventDefault();
}

// CLEAR PER SINGLE TASK
collectionList.addEventListener("click", clearPerTask);
function clearPerTask(e) {
  if (e.target.classList.contains("fa-remove")) {
    if (confirm("Want to remove this task?")) {
      collectionList.removeChild(e.target.parentElement.parentElement);
    }
  }
}
