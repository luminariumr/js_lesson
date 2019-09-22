let val;

const today =new Date(); // current date being used by the const today
let birthday = new Date('05/13/1983'); // date with specific MM/DD/YYYY
birthday = new Date('May 13 1983');
birthday = new Date('5-13-83 11:25:00'); // same dates but using a different format

//getting specifics into the Date()
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

//setting specifics on Date()
birthday.setMonth(0);
birthday.setDate(12);
birthday.setFullYear(1995);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(40);

console.log (birthday);