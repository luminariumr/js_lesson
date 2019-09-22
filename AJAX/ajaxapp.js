//Getting the element id
document.querySelector("#button1").addEventListener("click", loadUser);
document.querySelector("#button2").addEventListener("click", loadUsers);

function loadUser() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      var user = JSON.parse(this.responseText);
      var output = "";

      output += `<ul><li>${user.id}</li>
                    <li>${user.name}</li>
                    <li>${user.email}</li>
                    </ul>`;
      document.querySelector("#user").innerHTML = output;
    }
  };
  xhr.send();
}

function loadUsers() {
  // instantiating xmlhtttprequest
  var xhr = new XMLHttpRequest();
  // opening file
  xhr.open("GET", "users.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      var users = JSON.parse(this.responseText);
      var output = "";

      //     // using for loop
      //     for (var i in users) {
      //       output += `<ul><li>ID: ${users[i].id}</li>
      //                     <li>NAME: ${users[i].name}</li>
      //                     <li>EMAIL: ${users[i].email}</li>
      //                     </ul>`;
      //     }
      //     document.querySelector("#users").innerHTML = output;
      //   }
      // };

      // using forEach loop
      users.forEach(function(user) {
        output += `<ul><li>ID: ${user.id}</li>
    <li>NAME: ${user.name}</li>
    <li>EMAIL: ${user.email}</li>
    </ul>`;
      });
      // show output
      document.querySelector("#users").innerHTML = output;
    }
  };
  xhr.send();
}
