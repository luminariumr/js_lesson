// Add event unto button
document.querySelector("#button").addEventListener("click", getName);

function getName() {
  var xhr = new XMLHttpRequest();
  // opening the file
  xhr.open("GET", "process.php", true);

  xhr.onload = () => console.log(this.responseText);
  xhr.send();
}
