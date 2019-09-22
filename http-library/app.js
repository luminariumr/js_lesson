const http = new EasyHTTP();

// // GET post
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// // Create Data
// const data = {
//   title: "Custom Post",
//   body: "This is a custom post"
// };

// // Create Post
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update data
const upData = {
  title: "Update Post",
  body: "This is an updated post"
};

// // Update Post
// http.put("https://jsonplaceholder.typicode.com/posts/1", upData, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// // Delete Post
// http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// getting a number and using to update post
let numTxt = document.getElementById("num");

numTxt.addEventListener("keyup", function() {
  let numVal = numTxt.value;
  updatePost(numVal);
});

function updatePost(num) {
  http.put(
    `https://jsonplaceholder.typicode.com/posts/${num}`,
    upData,
    function(err, post) {
      if (err) {
        console.log(err);
      } else {
        console.log(post);
      }
    }
  );
}

// getting a number and then display post
let getPost = document
  .getElementById("getPosts")
  .addEventListener("click", postPost);
const getPosts = document.getElementById("httpPosts");
let getUl = document.getElementById("posteds");
let numVal2 = numTxt.value;
function postPost(e) {
  http.get(`https://jsonplaceholder.typicode.com/posts/${numVal2}`, function(
    err,
    posts
  ) {
    if (err) {
      console.log(err);
    } else {
      const la = document.createElement("li");
      const par = JSON.parse(posts);
      console.log(par);
      la.innerHTML = `<b>Title: ${par.title}</b>
                      <b>Body: ${par.body}</b>
                      <b>Id: ${par.id}</b>`;
      getUl.appendChild(la);
    }
  });
  e.preventDefault();
}
