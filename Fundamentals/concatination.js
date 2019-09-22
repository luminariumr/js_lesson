// CONCATINATION
const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Louie';
const tags = 'Web Design,Web Development, Video Editing';

let val;
val = firstName + lastName;
// Concatination
val = firstName + ' ' + lastName;

// Append
val = 'Louie ';
val += 'Lineses';
val = 'Hello, my name is '+ firstName + ' and I am '+ age;

// Escaping
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(' ',lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//Bracket Notation
val = firstName[0];

// Index of / indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt(6);

// get last char
val = firstName.charAt(firstName.length - 1);

//substring / substr()
val = firstName.substr(0, 4);

//slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split() - splits the value according to the parameter
val = str.split(' ');
val = tags.split(',');

//replace() - replaces a the certain value with the new one on the parameter = replace('old one','new one')
val = str.replace('Louie','Skatz');

// includes() - if the parameter has something on that variable = true, but if not = false
val = str.includes('name');

console.log(val);