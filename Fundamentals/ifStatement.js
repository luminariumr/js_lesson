const id = 100;

// IF EQUAL TO

if (id == 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}

// NOT EQUAL TO

if (id!= 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}

// NOTE: a if statement that has === : state that the variable is equal not just on value but also in its type
// TypeStrict

if (id === 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}

// Test if undefined

if (typeof id !== 'undefined'){
    console.log(`The id is ${id}`);
}else{
    console.log('No id');
}

// Greater or less than statements

if (id <= 100){ // less than equal
    console.log('Correct');
}else{
    console.log('Incorrect');
}

if (id>= 100){ // greater than equal
    console.log('Correct');
}else{
    console.log('Incorrect');
}

// IF ELSE
    const color = 'red';
    if (color === 'red'){
        console.log('Color is red');
    }else if (color === 'blue'){
        console.log('Color is blue');
    }else {
        console.log ('Color is not red or blue');
    }

//LOGICAL OPERATORS  --- AND / &&
const name = 'Steve', age = 70;
    if (age > 0 && age < 12){
        console.log(`${name} is a child`);
    } else if (age >= 13 && age <= 19){
        console.log(`${name} is a teenager`);
    } else {
        console.log(`${name} is an adult`);
    }

//LOGICAL OPERATORS  --- OR / ||
    if (age < 16 || age > 65){
        console.log(`${name} cannot run in a race`);
    } else {
        console.log(`${name} can run in a race`);
    }

//TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');

// Without Braces 

if (id === 100)
    console.log('Correct');
else
    console.log('Incorrect');
