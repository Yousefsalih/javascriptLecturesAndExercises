/*JavaScript Fundamentals – Part 1
LECTURE: Values and Variables
1. Declare variables called 'country','continent'and' population' and assign their values according to your own country (population in millions)
2. Logtheirvaluestotheconsole*/

let country = 'Canada';
let continent = 'North America';
let population = '38.01 million'

console.log(country)
console.log(continent)
console.log(population)

//LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// 2. Log the typesof 'isIsland','population','country'and 'language' to the console

let isIsland = 'Canada';
let language = '';
console.log(isIsland)


//Typeof to determine data type

console.log(typeof true);
console.log(typeof 'I`m a string?')
console.log(typeof 2)
console.log(typeof '')
let javascriptIsFun = 'Yes it is!';
console.log(typeof javascriptIsFun);
let undefinedType;
console.log(typeof undefinedType);


// This is called mutating (reassigning) a variable
let age = 30
age = 31

// Const is an immutable variable

// Var is mutable. Let is block scoped and var is function scoped.


//If you don't declare JS creates property on the global object. It does not declare in the scope such as the above.
lastName = 'Salih'
console.log(lastName)

//Basic Operators +, *, /, -

const now = 2022;
const ageYousef = now - 1993
const ageIbrahim = now - 1989
console.log(ageYousef,ageIbrahim)

// Assignemnt operators is "=", 
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1

// Comparison Operators. 

console.log(ageYousef > ageIbrahim); //false . There is >, <, >=, <=
console.log(ageYousef>=29); // true

//JS does the calculation before the comparison due to operator precedence.

console.log(ageYousef - 2 > ageIbrahim + 3);

//if / else statements:

const sarahAge = 10;
const isOldEnough = sarahAge >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - sarahAge;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
};

//To have access to the variable, you must first declare it outside of the scope of the if/else brackets.

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)

//Type conversion and coercion

//Type conversion: Done manually (strings, numbers, booleans)
const inputYear = '1991';
console.log(Number(inputYear) + 18)  //Converts string to number

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23)); //converts to string

//Type coercion (automatically converts): Dealing with two values with different types.
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log('10' - '4' - '3' - 2 + '5');

//Truthy and Falsy Values: Become 
//Falsy values: They are not false values but when we try to convert them to a boolean they will become false. These are: 0, '', undefined, null, NaN
//

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jones'));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 0;

if (money) {
    console.log("Dont spend it all")
} else {
    console.log('You should get a job')
}; //money is falsy so the else statement takes precedence

const moneyTruthy = 100;

if (moneyTruthy) {
    console.log("Dont spend it all")
} else {
    console.log('You should get a job')
}; //moneyTruthy is truthy so the if statement takes precedence

let height; //Another example of a falsy

if (height) {
    console.log('Yay! Height is defined')
} else {
    console.log('Height is undefined')
};

//Equality Operator

const adultAge = 19;
if (adultAge === 19) console.log('you just became an adult') // if the if statement is a single line, no need for curly brackets {}

const favourite = Number(prompt('Whats your favourite number?'));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
};

if (favourite !== 23) console.log('Not equal to 23')

//Boolean Logic Operators

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); //AND
console.log(hasDriversLicense || hasGoodVision); //OR
console.log(!hasDriversLicense); //NOT

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive')
// }

const isTired = true; //C

console.log(hasDriversLicense && hasGoodVision || isTired)

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive')
}

//The Switch Statement

const day = 'monday';
//Switch statement is not used a lot but it is cleaner then the if else statement in some cases.
switch(day) {
    case 'monday': // Day === 'Monday', if true, then the below gets executed
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; //Stops the code from executing the remaining lines until the next break exists
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('record videos'); //This works for both Wednesday and Thursday
        break;
    case 'friday':
        console.log('Eat a salad');
        break;
    case 'saturday':
        console.log('Enjoy the weekend');
        break;
    case 'sunday':
        console.log('Do nothing');
        break;
    default:
        console.log('Not a valid day!'); //like the else statement block
}

//Using if else statement for the same example above
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('record videos');
} else {
    console.log('not a valid day!')
}




/* This is a way to comment out code */

/*Best Practices
1) Always use const unless you're sure that the value will change in the future. This will reduce errors from mutating code.
2) Avoid the loose equality (==) operator for clean code and use strict equality (===)
*/