/*JavaScript Fundamentals – Part 1
LECTURE: Values and Variables
1. Declare variables called 'country','continent'and' population' and assign their values according to your own country (population in millions)
2. Logtheirvaluestotheconsole*/
'use strict'; //Strict mode forbids us from doing certain things and make it easier for developers to avoid accidental errors and makes it visible. Must be at the very top of the script file.

let country = 'Canada';
let continent = 'North America';
let population = '38.01 million';

console.log(country);
console.log(continent);
console.log(population);

//LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// 2. Log the typesof 'isIsland','population','country'and 'language' to the console

let isIsland = 'Canada';
let language = '';
console.log(isIsland);

//Typeof to determine data type

console.log(typeof true);
console.log(typeof 'I`m a string?');
console.log(typeof 2);
console.log(typeof '');
let javascriptIsFun = 'Yes it is!';
console.log(typeof javascriptIsFun);
let undefinedType;
console.log(typeof undefinedType);

// This is called mutating (reassigning) a variable
let age = 30;
age = 31;

// Const is an immutable variable

// Var is mutable. Let is block scoped and var is function scoped.

//If you don't declare JS creates property on the global object. It does not declare in the scope such as the above.
let lastName = 'Salih';
console.log(lastName);

//Basic Operators +, *, /, -

const now = 2022;
const ageYousef = now - 1993;
const ageIbrahim = now - 1989;
console.log(ageYousef, ageIbrahim);

// Assignemnt operators is "=",
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1

// Comparison Operators.

console.log(ageYousef > ageIbrahim); //false . There is >, <, >=, <=
console.log(ageYousef >= 29); // true

//JS does the calculation before the comparison due to operator precedence.

console.log(ageYousef - 2 > ageIbrahim + 3);

//if / else statements:

const sarahAge = 10;
const isOldEnough = sarahAge >= 18;

if (isOldEnough) {
  console.log('Sarah can start driving license');
} else {
  const yearsLeft = 18 - sarahAge;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

//To have access to the variable, you must first declare it outside of the scope of the if/else brackets.

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

//Type conversion and coercion

//Type conversion: Done manually (strings, numbers, booleans)
const inputYear = '1991';
console.log(Number(inputYear) + 18); //Converts string to number

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
  console.log('Dont spend it all');
} else {
  console.log('You should get a job');
} //money is falsy so the else statement takes precedence

const moneyTruthy = 100;

if (moneyTruthy) {
  console.log('Dont spend it all');
} else {
  console.log('You should get a job');
} //moneyTruthy is truthy so the if statement takes precedence

let height; //Another example of a falsy

if (height) {
  console.log('Yay! Height is defined');
} else {
  console.log('Height is undefined');
}

//Equality Operator

const adultAge = 19;
if (adultAge === 19) console.log('you just became an adult'); // if the if statement is a single line, no need for curly brackets {}

const favourite = Number(prompt('Whats your favourite number?'));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Not equal to 23');

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

console.log((hasDriversLicense && hasGoodVision) || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive');
}

//The Switch Statement

const day = 'monday';
//Switch statement is not used a lot but it is cleaner then the if else statement in some cases.
switch (day) {
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
  console.log('not a valid day!');
}

//Statements and Expressions
//Expression produces a value like 3+4
//Statements: Performs actions but doesn't produce a value like if/else statement

const me = 'Yousef';

console.log(`My name is ${me}!`); //Template literals only except expressions and not statements.

//Conditional (Ternary) Operator
//It allows us to use a similar format to the if/else statement but all in one line, easier and cleaner
//Ternary operator has 3 parts (Condition, if, else)
//Operator always produce a value which means that it is an expression
//Ternary operator is not a replacement for if/else statements (for bigger blocks of code that needs to be executed based on conditions)

let validAge = 23;
validAge >= 18
  ? console.log('I like to drink coffee')
  : console.log('I like to drink water');

const drink = validAge >= 18 ? 'Drink Coffee' : 'Drink water';
console.log(drink);

let drink2; //Must declare outside of the if/else statement to have access to it

if (validAge >= 18) {
  drink2 = 'Drink Milk';
} else {
  drink2 = 'Drink water';
}

console.log(drink2);

console.log(`I like to ${validAge >= 18 ? 'Drink Coffee' : 'Drink water'}`); //Expression is used in a template literal

//Trying out Strict mode
let hasGovernmentID = false;
const passTest = true;

if (passTest) hasGovernmentID = true;
if (hasGovernmentID) console.log('I can drive');
// const if = 23; Will not work

//Functions
function logger() {
  console.log('My name is Jonas'); //function body
}

logger(); //calling/running/invoking function

function fruitProcessor(apples, oranges) {
  //apples and oranges are parameters (placeholders)
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
  console.log(juice); //This will not work
}

fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));
//Alternatively
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4); // 2 and 4 are values passed on as arguments

//Function Declarations vs Expressions

//Function declarations can be declared before defining it (before initialization) due to hoisting whereas function expressions cannot.

//Function declaration
function calcAge1(birthYear) {
  //One way:
  // const ageCalc = 2037 - birthYear
  // return ageCalc
  //Better way:
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function Expression
const calcAge2 = function (birthYear) {
  //Stored in the variable 'calcAge2' which will be the function reference. However, the function itself is considered to be an expression which produces a value and it is considered an anonymous function. Functions are not a type.
  return 2038 - birthYear;
};

const age2 = calcAge2(1990);

console.log(age2);

//Arrow function - faster version of a function expression. Arrow functions do not get a 'this' keyword.

const calcAge3 = (birthYear) => 2037 - birthYear; //No need for the return keyword
const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1989, 'Yousef'));

//Functions calling another function

function cutFruitPieces(fruit) {
  //#4, #8
  return fruit * 4; //#5 #9
}

function fruitProcessor2(apples, oranges) {
  //apples and oranges are parameters (placeholders). #2
  console.log(apples, oranges);
  const orangePieces = cutFruitPieces(apples); //#3, #6
  const applePieces = cutFruitPieces(oranges); //#7 #10
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`; //#11
  return juice; //#12
  console.log(juice); //This will not work
}

console.log(fruitProcessor2(2, 3)); //#1 #13

const calcAge4 = function (birthYear) {
  return 2037 - birthYear;
};

//Console.log must show up before the return (exits)
const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge4(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement2(1929, 'Yousef'));

//Arrays - Data Structure

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']; //Literal syntax
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020); //Alternatively using the array function with the new keyword

console.log(years);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; //Only primitive values are immutable. Arrays are not primitive. This mutating the value. But you cannot replace the entire array.
console.log(friends);

const yousef = ['Yousef', 'Salih', 2023 - 1993, true, friends]; //Different values can be added, including an array

console.log(yousef);

const calcAge5 = function (birthYear) {
  return 2037 - birthYear;
};

const years1 = [1990, 1967, 2002, 2010, 2018];
const ageArray1 = calcAge5(years1[0]);
const ageArray2 = calcAge5(years1[1]);
const ageArray3 = calcAge5(years1[2]);
const ageArray4 = calcAge5(years1[3]);
const ageArray5 = calcAge5(years1[4]);

console.log(ageArray1, ageArray2, ageArray4);

//Array Operations (Methods)

const newFriends = ['Sam', 'Bill', 'Jack'];
const newLength = newFriends.push('Jimmy');
console.log(newFriends);

const popped = newFriends.pop();
console.log(popped);
console.log(newFriends);

console.log(newFriends.indexOf('Sam')); //Finds the index number
console.log(newFriends.includes('Bob')); //Boolean value

//Objects - Data Structure

const yousefObject = {
  firstName: 'Yousef',
  lastName: 'Salih',
  job: 'Front-End Developer',
  friends: ['Sam', 'Bill', 'Jack'],
};

console.log(yousefObject);

//Dot Notation Vs. Bracket Notation

console.log(yousefObject.firstName); //Dot notation
console.log(yousefObject['lastName']); //Bracket notation

const nameKey1 = 'Name';
console.log(yousefObject['last' + nameKey1]);
console.log(yousefObject['first' + nameKey1]);

const interestedIn = prompt(
  'What do you want to know about Yousef? Choose between firstName, lastName, job, and friends'
);

if (yousefObject[interestedIn]) {
  alert(yousefObject[interestedIn]);
} else {
  alert('Choose from the options available!');
}

yousefObject.location = 'Vancouver';
yousefObject['myDrink'] = 'coffee';

console.log(
  `${yousefObject.firstName} has ${yousefObject.friends.length} friends and his best friend is called ${yousefObject.friends[2]}`
);

//Object Methods

const yousefObject1 = {
  firstName: 'Yousef',
  lastName: 'Salih',
  job: 'Front-End Developer',
  friends: ['Sam', 'Bill', 'Jack'],
  hasDriversLicense: true,
  birthYear: 1990,
  //   calcAge: function (birthYear) { //Methods needs function expression and not function declaration. Property that holds a function value.
  //     return 2037 - birthYear
  //   }
  calcAge: function () {
    return 2037 - this.birthYear;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      yousefObject1.job
    } and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. `;
  },
};

console.log(yousefObject1.calcAge());
console.log(yousefObject1.getSummary());

//Iteration: For Loop - keeps running while condition is true. Initial, condition,

for (let rep = 1; rep <= 10; rep++) {
  //same as rep = rep + 1
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️ `); //Emoji CMD + CTRL + SPACE
}

//For loop with an array
const yousefArray = ['Yousef', 1, 2023 - 1993, ['John', 'Jonah', 'Musk'], true];

//Do the same as below using a for loop
console.log(yousefArray[0]);
console.log(yousefArray[1]);
console.log(yousefArray[2]);
console.log(yousefArray[3]);
console.log(yousefArray[4]);

const types = []; //Values will be inserted from the loop below

for (let i = 0; i < yousefArray.length; i++) {
  console.log(yousefArray[i], typeof yousefArray[i]);
  // types[i] = typeof yousefArray[i]; One way of inserting values into the 'types' array
  types.push(typeof yousefArray[i]); //Alternative way of doing it
}

console.log(types);

const years2 = [1990, 2045, 2035, 2042];
const yearsDifference = [];

for (let i = 0; i < years2.length; i++) {
  let calc = 2037 - years2[i];
  yearsDifference.push(calc);
}

console.log(yearsDifference);

//Continue and break statements
console.log(`---ONLY STRINGS---`);
for (let i = 0; i < yousefArray.length; i++) {
  if (typeof yousefArray[i] !== 'string') continue; // Continue is  allows us to exit the current iteration of the loop and skips the types that are not string
  console.log(yousefArray[i], typeof yousefArray[i]);
}

console.log(`---BREAK WITH NUMBERS---`);
for (let i = 0; i < yousefArray.length; i++) {
  if (typeof yousefArray[i] === 'number') break; //Break completely terminates the whole loop, not just the current iteration. So once a number is found, it terminates the loop. Once it finds a number it stops and prints the type before that and does not include the number.
  console.log(yousefArray[i], typeof yousefArray[i]);
}

//Looping backwards

for (let i = years2.length - 1; i >= 0; i--) {
  console.log(years2[i]);
}

//Creating a loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

//While Loop in comparison a for loop
for (let rep = 1; rep <= 10; rep++) {
  //same as rep = rep + 1
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️ `); //Emoji CMD + CTRL + SPACE
}

let rep = 1;
//While loop does not need a counter, it is more versatile than a for loop. It just needs a condition.
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

//Example 2:
let dice = Math.trunc(Math.random() * 6) + 1; //random number between 0 and 6 but in decimal. Trunc makes it without decimal. The +1 is because it will give a number between 0 and 5.
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; //Back into the condition
  if (dice === 6) console.log('Dice is a 6 so the loop ends');
}

//PROBLEM:
//We work for a company building a smart home therometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might a sensor error"

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) Understanding the problem
//What is temp altitude? Answer: Difference between highest and lowest temp
//How to compute max and min temperature?
//Whats a sensor error? And what to do?

//2) breaking the problem into sub-problems
//How to ignore errors?
//Find max value in temp array
//Find min value in temp array
//Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];
//   for(let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if(typeof curTemp !== 'number') continue; //Continue is when the rest of the iteration for 'error' will not be made because it is not a number therefore it will continue to 9 since it is a number
//     if(curTemp > max) max = curTemp;
//     if(curTemp < min) min = curTemp;
//   };
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//PROBLEM 2: Function should receive 2 arrays of temps

//1) Understanding the problem
//With 2 arrays, should we implement the functionality twice? NO, just merge 2 arrays

//2) Breaking the problem into sub-problems
//Merge 2 arrays

const calcTempAmplitudeBug = function (t1, t2) {
  // const array1 = ['a', 'b', 'c'];
  // const array2 = ['d', 'e', 'f'];
  // const array3 = array1.concat(array2); Temps variable below is the real example. t1 and t2 are arrays.
  const temps = t1.concat(t2); //Bring the two arrays into one
  console.log(temps)

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; //Array index value
    if (typeof curTemp !== 'number') continue; //Only iterate if its a number.
    if (curTemp > max) max = curTemp; //If the value is greater than max, max will take on that number and iterate again until it is the max in the array.
    if (curTemp < min) min = curTemp; //If the value is less than min, min will take on that number and iterate again until it is the min in the array.
  }
  console.log(max, min); //Show the max and min value
  return max - min; //Minus them to get the amplitude value
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]); //2 arrays passed on as arguments to the parameters t1 and t2 in the calcTempAmplitudeBug variable with an anonymous function (function expression)
console.log(amplitudeBug); //Show the value of the amplitude by returning it from the function calcTempAmplitude

//Software bug: Defect or problem in a computer program (unexpected or unintended behaviour)

//Debugging process:
//Identify (during development, testing software, use reports during production, context)
//Find: Developer console (Simple code), Debugger (complex code)
//Fix: Replace wrong solution with new correct solution
//Prevent: Search for the same bug in similar code, writing tests during testing software

//How I solved the issue of concatenation

// const measureKelvin = function (){
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Degrees celsius:')
//   }
//   console.log(typeof measurement.value)
//   const convert = Number(measurement.value);
//   const kelvin = convert + 273;
//   return kelvin
// };

// console.log(measureKelvin());

//How it was solved by instructor
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),//Convert string received from the user input into a number
  };
  console.table(measurement); //#1 See object. It becomes apparent that the value is stored as a string.
  // debugger; //Automatically takes you to the debugger pane
  const kelvin = measurement.value + 273; //Add conversion number to 273
  return kelvin; //return result
};

console.log(measureKelvin()); //Call function


/* This is a way to comment out code */

/*Best Practices
1) Always use const unless you're sure that the value will change in the future. This will reduce errors from mutating code.
2) Avoid the loose equality (==) operator for clean code and use strict equality (===)
*/
