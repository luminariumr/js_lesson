const http = new EasyHTTP();

// GET USERS
http
  .get("https:/jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(err => console.log(err));

// User Data
const upData = {
  title: "Update Post",
  body: "This is an updated post"
};

http
  .post("https:/jsonplaceholder.typicode.com/users", upData)
  .then(data => console.log(data))
  .catch(err => console.log(err));

let numTxt = document.getElementById("num");

numTxt.addEventListener("keyup", function() {
  let numVal = numTxt.value;
  updatePost(numVal);
  deletePost(numVal);
});

function updatePost(num) {
  http
    .put(`https:/jsonplaceholder.typicode.com/users/${num}`, upData)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function deletePost(num) {
  http
    .delete(`https:/jsonplaceholder.typicode.com/users/${num}`)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
