// Load GIT Hub Users
document.querySelector("#button").addEventListener("click", loadUsers);

// function load users
function loadUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);

  xhr.onload = function() {
    if (this.status === 200) {
      var users = JSON.parse(this.responseText);

      var output = "";
      //using for loop
      //   for (var i in users) {
      //     output += `<div class="user">
      //                     <img src="${users[i].avatar_url} width="70" height="70">
      //                     <ul>
      //                     <li>ID: ${users[i].id}</li>
      //                     <li>User: ${users[i].login}</li>
      //                     <li>Type: ${users[i].type}</li>
      //                     </ul>
      //                     </div>`;
      //   }

      //using forEach loop
      users.forEach(function(user) {
        output += `<div class="user"> 
        <img src="${user.avatar_url} width="70" height="70">
        <ul>
        <li>ID: ${user.id}</li>
        <li>User: ${user.login}</li>
        <li>Type: ${user.type}</li>
        </ul>
        </div>`;
      });
      document.querySelector("#users").innerHTML = output;
    }
  };

  xhr.send();
}
