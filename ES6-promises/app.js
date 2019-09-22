// ES6 Promises
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
  { title: "Post Three", body: "This is post three" }
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong. =(");
      }
    }, 3000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>
      <li>${post.body}</li>`;
    });

    document.body.innerHTML = output;
  }, 2000);
}

createPost({ title: "Post Four", body: "This is created Post" })
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });
  