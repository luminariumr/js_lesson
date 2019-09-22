//
document.querySelector(".get-jokes").addEventListener("click", loadJokes);

function loadJokes(e) {
  const number = document.querySelector("#number").value;
  var xhr = new XMLHttpRequest();
  // open api open(HTTP verb, link/file name/ async true : if not false)
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      // instantiating the response
      var jokes = JSON.parse(this.responseText);
      // accessing the object name values
      let numofJokes = jokes.value;
      let jokeType = jokes.type;
      var output = "";

      // asking if the type is success, and the number is not empty and 0 is greater than number
      if (jokeType === "success" && number != "" && number > 0) {
        if (number == 1) {
          var jokeNum = `List of ${number} Chuck Norris joke`;
          document.querySelector(".jokeNum").innerHTML = jokeNum;
          // showing all the values from let numofJokes
          numofJokes.forEach(function(joke) {
            output += `<hr>
                <li>ID : <b>[${joke.id}]</b>: ${joke.joke}</li>`;
          });
          //show output
          document.querySelector(".jokes").innerHTML = output;
          // clear input
          document.querySelector("#number").value = "";
        } else if (number > 1) {
          var jokeNum = `List of ${number} Chuck Norris jokes`;
          document.querySelector(".jokeNum").innerHTML = jokeNum;
          // showing all the values from let numofJokes
          numofJokes.forEach(function(joke, index) {
            if (index % 2) {
              output += `<hr>
                <li style="color:navy">ID : <b>[${joke.id}]</b>: ${joke.joke}</li>`;
            } else {
              output += `<hr>
                <li style="color:teal">ID : <b>[${joke.id}]</b>: ${joke.joke}</li>`;
            }
          });
          // show output
          document.querySelector(".jokes").innerHTML = output;
          // clear input
          document.querySelector("#number").value = "";
        }
      } else {
        output += `<li style='color:red'>An error just happened.</li>`;
        // show output
        document.querySelector(".jokes").innerHTML = output;
        // clear input
        document.querySelector("#number").value = "";
      }
    }
  };

  xhr.send();
  e.preventDefault();
}
