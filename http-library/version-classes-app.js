const http = new EasyHTTP();

// GET users
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(err => console.log(err));

// User Data
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "jdoe@gmail.com"
};

http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Update Data

const input = document.querySelector("input");
input.addEventListener("keyup", _ => {
  http
    .put(`https://jsonplaceholder.typicode.com/users/${input.value}`, data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});

// Delete User
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data))
  .catch(err => console.log(err));
