// get local text file data
const getText = _ => {
  fetch("text.txt")
    .then(res => res.text())
    .then(data => (document.querySelector("#output").innerHTML = data))
    .catch(err => console.log(err));
};

//get local json file data
// the ones with comment can still be used using .text for json
const getJson = _ => {
  fetch("posts.json")
    .then(data => data.json())
    //   return data.text();
    .then(posts => {
      //   const post = JSON.parse(posts);
      let output = "",
        data = posts;
      //   post.forEach(function(pop) {
      //     output += `<li>${pop.title} : ${pop.body}</li>`;
      //   });
      data.forEach(post => (output += `<li>${post.title} : ${post.body}</li>`));
      document.querySelector("#output").innerHTML = output;
      console.log(data);
    })
    .catch(err => console.log(err));
};

// get api file data
// using vanilla JS using function
// function getApi() {
//   fetch("https://api.github.com/users")
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(data) {
//       let output = "";
//       let posts = data;
//       posts.forEach(function(post) {
//         output += `<hr>
//         <ul><li><img src='${post.avatar_url}' style="height:50px"></li>
//         <li>Login Name: ${post.login}</li>
//         <li>ID: ${post.id}</li></ul>
//                     `;
//       });
//       document.querySelector("#output").innerHTML = output;
//       console.log(data);
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// using arrow function js
const getApi = _ => {
  fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      let output = "";
      let posts = data;
      posts.forEach(
        post =>
          (output += `<hr>
          <ul><li><img src='${post.avatar_url}' style="height:50px"></li>
          <li>Login Name: ${post.login}</li>
          <li>ID: ${post.id}</li></ul>
                      `)
      );
      document.querySelector("#output").innerHTML = output;
      console.log(data);
    })
    .catch(err => console.log(err));
};

// TIP: a function without a value inside a parameter can also use an arrow function

/* EX:  function exampleEx() {} --- is the basic function way
        function exampleEx = _ => {}  --- is the arrow function way */

document.querySelector("#button1").addEventListener("click", getText);
document.querySelector("#button2").addEventListener("click", getJson);
document.querySelector("#button3").addEventListener("click", getApi);
