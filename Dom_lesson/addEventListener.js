// document.querySelector(".clear-tasks").addEventListener("click", function(e) {
//   console.log("IT WORKED");
//   e.preventDefault();
// });

document.querySelector(".clear-tasks").addEventListener("click", onclick);

function onclick(e) {
  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Time stamp
  val = e.timeStamp;

  // Coordinates event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coordinates event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
  e.preventDefault();
}
