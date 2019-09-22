// EVENT BUBBLING

// document.querySelector(".card-title").addEventListener("click", function() {
//   console.log("card-title");
// }); //CLICKING ON THE "CARD TITLE" TEXT CREATES A CONSOLE

// document.querySelector(".card-content").addEventListener("click", function() {
//   console.log("card-content");
// }); //CLICKING ON THE "CARD CONTENT" TEXT CREATES A CONSOLE
// document.querySelector(".card").addEventListener("click", function() {
//   console.log("card");
// }); //CLICKING ON THE "CARD" TEXT CREATES A CONSOLE

// EVENT DELIGATION

// const delItem = document.querySelector(".delete-item");
// delItem.addEventListener("click", deleteItem);
document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  //   if (e.target.parentElement.className === "delete-item secondary-content") {
  //     console.log(e.target.parentElement.classList);
  //   }
  if (e.target.parentElement.classList.contains("delete-item"))
    e.target.parentElement.parentElement.remove();
  e.preventDefault();
}
