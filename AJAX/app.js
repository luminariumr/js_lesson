// Create event listener for the button
document.querySelector("#button").addEventListener("click", loadText);

function loadText() {
  // Create XHR Object
  var xhr = new XMLHttpRequest();
  // OPEN - type,url/file, asyn
  xhr.open("GET", "simple-text.txt", true);

  // Just to look what the state of the request is
  console.log("READYSTATE: ", xhr.readyState);
  //New way
  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      document.querySelector("#text").innerHTML = this.responseText;
    } else if (this.status === 400) {
      document.querySelector("#text").innerHTML = "Item not found";
    }
  };

  xhr.onerror = function() {
    console.log("Request Error.....");
  };
  // Old way
  //   xhr.onreadystatechange = function() {
  //     if (xhr.readyState === 4 && this.status === 200) {
  //       console.log(this.responseText);
  //     }
  //   };
  // Sends request
  xhr.send();
}

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP STATUSES
// 200 : OK
// 403: Forbidden
// 404: Not Found
