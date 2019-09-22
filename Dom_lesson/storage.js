// Set local storage item
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "36");

// //set sessionStorage item
// sessionStorage.setItem("Name", "Peter");

// Remove from storage
// localStorage.removeItem("age");

// Get from storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// console.log(name, age);

// Clear local storage
// localStorage.clear();

document.querySelector("form").addEventListener("submit", function(e) {
  const task = document.getElementById("task").value;
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task Saved");
  tasks.forEach(function() {
    console.log(task);
  });
  e.preventDefault();
});
