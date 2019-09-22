// WINDOW METHODS / OBJECT / PROPERTIES

// alert (basic - oldest way)
//alert("hello world");

// Prompt ----input and shows it using alert
// const input = prompt();
// alert(input);

// Confirm
// if (confirm("Are you sure?")) {
//   console.log("Yes"); // clicking ok
// } else {
//   console.log("No"); // clicking cancel
// }

let val;

// Outer height and width
val = window.outerHeight; // shows value of height
val = window.outerWidth; // shows value of width

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// REDIRECT
//window.location.href = "http://facebook.com"; // can be used for href buttons

// RELOAD
//window.location.reload(); // use it as a button, for refreshing

// HISTORY OBJECT
window.history.go(-1); // can be use as a return button--parameter can set how far back you can return
val = window.history.length;

// NAVIGATOR OBJECT
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val);
