// /*JavaScript Fundamentals – Part 1
// LECTURE: Values and Variables
// 1. Declare variables called 'country','continent'and' population' and assign their values according to your own country (population in millions)
// 2. Logtheirvaluestotheconsole*/
// 'use strict'; //Strict mode forbids us from doing certain things and make it easier for developers to avoid accidental errors and makes it visible. Must be at the very top of the script file.

// let country = 'Canada';
// let continent = 'North America';
// let population = '38.01 million';

// console.log(country);
// console.log(continent);
// console.log(population);

// //LECTURE: Data Types
// // 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// // 2. Log the typesof 'isIsland','population','country'and 'language' to the console

// let isIsland = 'Canada';
// let language = '';
// console.log(isIsland);

// //Typeof to determine data type

// console.log(typeof true);
// console.log(typeof 'I`m a string?');
// console.log(typeof 2);
// console.log(typeof '');
// let javascriptIsFun = 'Yes it is!';
// console.log(typeof javascriptIsFun);
// let undefinedType;
// console.log(typeof undefinedType);

// // This is called mutating (reassigning) a variable
// let age = 30;
// age = 31;

// // Const is an immutable variable

// // Var is mutable. Let is block scoped and var is function scoped.

// //If you don't declare JS creates property on the global object. It does not declare in the scope such as the above.
// let lastName = 'Salih';
// console.log(lastName);

// //Basic Operators +, *, /, -

// const now = 2022;
// const ageYousef = now - 1993;
// const ageIbrahim = now - 1989;
// console.log(ageYousef, ageIbrahim);

// // Assignemnt operators is "=",
// let x = 10 + 5; //15
// x += 10; //x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1

// // Comparison Operators.

// console.log(ageYousef > ageIbrahim); //false . There is >, <, >=, <=
// console.log(ageYousef >= 29); // true

// //JS does the calculation before the comparison due to operator precedence.

// console.log(ageYousef - 2 > ageIbrahim + 3);

// //if / else statements:

// const sarahAge = 10;
// const isOldEnough = sarahAge >= 18;

// if (isOldEnough) {
//   console.log('Sarah can start driving license');
// } else {
//   const yearsLeft = 18 - sarahAge;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// //To have access to the variable, you must first declare it outside of the scope of the if/else brackets.

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// //Type conversion and coercion

// //Type conversion: Done manually (strings, numbers, booleans)
// const inputYear = '1991';
// console.log(Number(inputYear) + 18); //Converts string to number

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23)); //converts to string

// //Type coercion (automatically converts): Dealing with two values with different types.
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// console.log('10' - '4' - '3' - 2 + '5');

// //Truthy and Falsy Values: Become
// //Falsy values: They are not false values but when we try to convert them to a boolean they will become false. These are: 0, '', undefined, null, NaN
// //

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jones'));
// console.log(Boolean(''));
// console.log(Boolean({}));

// const money = 0;

// if (money) {
//   console.log('Dont spend it all');
// } else {
//   console.log('You should get a job');
// } //money is falsy so the else statement takes precedence

// const moneyTruthy = 100;

// if (moneyTruthy) {
//   console.log('Dont spend it all');
// } else {
//   console.log('You should get a job');
// } //moneyTruthy is truthy so the if statement takes precedence

// let height; //Another example of a falsy

// if (height) {
//   console.log('Yay! Height is defined');
// } else {
//   console.log('Height is undefined');
// }

// //Equality Operator

// const adultAge = 19;
// if (adultAge === 19) console.log('you just became an adult'); // if the if statement is a single line, no need for curly brackets {}

// const favourite = Number(prompt('Whats your favourite number?'));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log('Cool! 23 is an amazing number');
// } else if (favourite === 7) {
//   console.log('7 is also a cool number');
// } else {
//   console.log('Number is not 23 or 7');
// }

// if (favourite !== 23) console.log('Not equal to 23');

// //Boolean Logic Operators

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision); //AND
// console.log(hasDriversLicense || hasGoodVision); //OR
// console.log(!hasDriversLicense); //NOT

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //     console.log('Sarah is able to drive')
// // } else {
// //     console.log('Someone else should drive')
// // }

// const isTired = true; //C

// console.log((hasDriversLicense && hasGoodVision) || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive');
// } else {
//   console.log('Someone else should drive');
// }

// //The Switch Statement

// const day = 'monday';
// //Switch statement is not used a lot but it is cleaner then the if else statement in some cases.
// switch (day) {
//   case 'monday': // Day === 'Monday', if true, then the below gets executed
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break; //Stops the code from executing the remaining lines until the next break exists
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('record videos'); //This works for both Wednesday and Thursday
//     break;
//   case 'friday':
//     console.log('Eat a salad');
//     break;
//   case 'saturday':
//     console.log('Enjoy the weekend');
//     break;
//   case 'sunday':
//     console.log('Do nothing');
//     break;
//   default:
//     console.log('Not a valid day!'); //like the else statement block
// }

// //Using if else statement for the same example above
// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('record videos');
// } else {
//   console.log('not a valid day!');
// }

// //Statements and Expressions
// //Expression produces a value like 3+4
// //Statements: Performs actions but doesn't produce a value like if/else statement

// const me = 'Yousef';

// console.log(`My name is ${me}!`); //Template literals only except expressions and not statements.

// //Conditional (Ternary) Operator
// //It allows us to use a similar format to the if/else statement but all in one line, easier and cleaner
// //Ternary operator has 3 parts (Condition, if, else)
// //Operator always produce a value which means that it is an expression
// //Ternary operator is not a replacement for if/else statements (for bigger blocks of code that needs to be executed based on conditions)

// let validAge = 23;
// validAge >= 18
//   ? console.log('I like to drink coffee')
//   : console.log('I like to drink water');

// const drink = validAge >= 18 ? 'Drink Coffee' : 'Drink water';
// console.log(drink);

// let drink2; //Must declare outside of the if/else statement to have access to it

// if (validAge >= 18) {
//   drink2 = 'Drink Milk';
// } else {
//   drink2 = 'Drink water';
// }

// console.log(drink2);

// console.log(`I like to ${validAge >= 18 ? 'Drink Coffee' : 'Drink water'}`); //Expression is used in a template literal

// //Trying out Strict mode
// let hasGovernmentID = false;
// const passTest = true;

// if (passTest) hasGovernmentID = true;
// if (hasGovernmentID) console.log('I can drive');
// // const if = 23; Will not work

// //Functions
// function logger() {
//   console.log('My name is Jonas'); //function body
// }

// logger(); //calling/running/invoking function

// function fruitProcessor(apples, oranges) {
//   //apples and oranges are parameters (placeholders)
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
//   console.log(juice); //This will not work
// }

// fruitProcessor(5, 0);
// console.log(fruitProcessor(5, 0));
// //Alternatively
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4); // 2 and 4 are values passed on as arguments

// //Function Declarations vs Expressions

// //Function declarations can be declared before defining it (before initialization) due to hoisting whereas function expressions cannot.

// //Function declaration
// function calcAge1(birthYear) {
//   //One way:
//   // const ageCalc = 2037 - birthYear
//   // return ageCalc
//   //Better way:
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //Function Expression
// const calcAge2 = function (birthYear) {
//   //Stored in the variable 'calcAge2' which will be the function reference. However, the function itself is considered to be an expression which produces a value and it is considered an anonymous function. Functions are not a type.
//   return 2038 - birthYear;
// };

// const age2 = calcAge2(1990);

// console.log(age2);

// //Arrow function - faster version of a function expression. Arrow functions do not get a 'this' keyword.

// const calcAge3 = (birthYear) => 2037 - birthYear; //No need for the return keyword
// const age3 = calcAge3(1989);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1989, 'Yousef'));

// //Functions calling another function

// function cutFruitPieces(fruit) {
//   //#4, #8
//   return fruit * 4; //#5 #9
// }

// function fruitProcessor2(apples, oranges) {
//   //apples and oranges are parameters (placeholders). #2
//   console.log(apples, oranges);
//   const orangePieces = cutFruitPieces(apples); //#3, #6
//   const applePieces = cutFruitPieces(oranges); //#7 #10
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`; //#11
//   return juice; //#12
//   console.log(juice); //This will not work
// }

// console.log(fruitProcessor2(2, 3)); //#1 #13

// const calcAge4 = function (birthYear) {
//   return 2037 - birthYear;
// };

// //Console.log must show up before the return (exits)
// const yearsUntilRetirement2 = function (birthYear, firstName) {
//   const age = calcAge4(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement2(1929, 'Yousef'));

// //Arrays - Data Structure

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter']; //Literal syntax
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020); //Alternatively using the array function with the new keyword

// console.log(years);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'; //Only primitive values are immutable. Arrays are not primitive. This mutating the value. But you cannot replace the entire array.
// console.log(friends);

// const yousef = ['Yousef', 'Salih', 2023 - 1993, true, friends]; //Different values can be added, including an array

// console.log(yousef);

// const calcAge5 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years1 = [1990, 1967, 2002, 2010, 2018];
// const ageArray1 = calcAge5(years1[0]);
// const ageArray2 = calcAge5(years1[1]);
// const ageArray3 = calcAge5(years1[2]);
// const ageArray4 = calcAge5(years1[3]);
// const ageArray5 = calcAge5(years1[4]);

// console.log(ageArray1, ageArray2, ageArray4);

// //Array Operations (Methods)

// const newFriends = ['Sam', 'Bill', 'Jack'];
// const newLength = newFriends.push('Jimmy');
// console.log(newFriends);

// const popped = newFriends.pop();
// console.log(popped);
// console.log(newFriends);

// console.log(newFriends.indexOf('Sam')); //Finds the index number
// console.log(newFriends.includes('Bob')); //Boolean value

// //Objects - Data Structure

// const yousefObject = {
//   firstName: 'Yousef',
//   lastName: 'Salih',
//   job: 'Front-End Developer',
//   friends: ['Sam', 'Bill', 'Jack'],
// };

// console.log(yousefObject);

// //Dot Notation Vs. Bracket Notation

// console.log(yousefObject.firstName); //Dot notation
// console.log(yousefObject['lastName']); //Bracket notation

// const nameKey1 = 'Name';
// console.log(yousefObject['last' + nameKey1]);
// console.log(yousefObject['first' + nameKey1]);

// const interestedIn = prompt(
//   'What do you want to know about Yousef? Choose between firstName, lastName, job, and friends'
// );

// if (yousefObject[interestedIn]) {
//   alert(yousefObject[interestedIn]);
// } else {
//   alert('Choose from the options available!');
// }

// yousefObject.location = 'Vancouver';
// yousefObject['myDrink'] = 'coffee';

// console.log(
//   `${yousefObject.firstName} has ${yousefObject.friends.length} friends and his best friend is called ${yousefObject.friends[2]}`
// );

// //Object Methods

// const yousefObject1 = {
//   firstName: 'Yousef',
//   lastName: 'Salih',
//   job: 'Front-End Developer',
//   friends: ['Sam', 'Bill', 'Jack'],
//   hasDriversLicense: true,
//   birthYear: 1990,
//   //   calcAge: function (birthYear) { //Methods needs function expression and not function declaration. Property that holds a function value.
//   //     return 2037 - birthYear
//   //   }
//   calcAge: function () {
//     return 2037 - this.birthYear;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       yousefObject1.job
//     } and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. `;
//   },
// };

// console.log(yousefObject1.calcAge());
// console.log(yousefObject1.getSummary());

// //Iteration: For Loop - keeps running while condition is true. Initial, condition,

// for (let rep = 1; rep <= 10; rep++) {
//   //same as rep = rep + 1
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️ `); //Emoji CMD + CTRL + SPACE
// }

// //For loop with an array
// const yousefArray = ['Yousef', 1, 2023 - 1993, ['John', 'Jonah', 'Musk'], true];

// //Do the same as below using a for loop
// console.log(yousefArray[0]);
// console.log(yousefArray[1]);
// console.log(yousefArray[2]);
// console.log(yousefArray[3]);
// console.log(yousefArray[4]);

// const types = []; //Values will be inserted from the loop below

// for (let i = 0; i < yousefArray.length; i++) {
//   console.log(yousefArray[i], typeof yousefArray[i]);
//   // types[i] = typeof yousefArray[i]; One way of inserting values into the 'types' array
//   types.push(typeof yousefArray[i]); //Alternative way of doing it
// }

// console.log(types);

// const years2 = [1990, 2045, 2035, 2042];
// const yearsDifference = [];

// for (let i = 0; i < years2.length; i++) {
//   let calc = 2037 - years2[i];
//   yearsDifference.push(calc);
// }

// console.log(yearsDifference);

// //Continue and break statements
// console.log(`---ONLY STRINGS---`);
// for (let i = 0; i < yousefArray.length; i++) {
//   if (typeof yousefArray[i] !== 'string') continue; // Continue is  allows us to exit the current iteration of the loop and skips the types that are not string
//   console.log(yousefArray[i], typeof yousefArray[i]);
// }

// console.log(`---BREAK WITH NUMBERS---`);
// for (let i = 0; i < yousefArray.length; i++) {
//   if (typeof yousefArray[i] === 'number') break; //Break completely terminates the whole loop, not just the current iteration. So once a number is found, it terminates the loop. Once it finds a number it stops and prints the type before that and does not include the number.
//   console.log(yousefArray[i], typeof yousefArray[i]);
// }

// //Looping backwards

// for (let i = years2.length - 1; i >= 0; i--) {
//   console.log(years2[i]);
// }

// //Creating a loop inside a loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

// //While Loop in comparison a for loop
// for (let rep = 1; rep <= 10; rep++) {
//   //same as rep = rep + 1
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️ `); //Emoji CMD + CTRL + SPACE
// }

// let rep = 1;
// //While loop does not need a counter, it is more versatile than a for loop. It just needs a condition.
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// //Example 2:
// let dice = Math.trunc(Math.random() * 6) + 1; //random number between 0 and 6 but in decimal. Trunc makes it without decimal. The +1 is because it will give a number between 0 and 5.
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1; //Back into the condition
//   if (dice === 6) console.log('Dice is a 6 so the loop ends');
// }

// //PROBLEM:
// //We work for a company building a smart home therometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might a sensor error"

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// //1) Understanding the problem
// //What is temp altitude? Answer: Difference between highest and lowest temp
// //How to compute max and min temperature?
// //Whats a sensor error? And what to do?

// //2) breaking the problem into sub-problems
// //How to ignore errors?
// //Find max value in temp array
// //Find min value in temp array
// //Subtract min from max (amplitude) and return it

// // const calcTempAmplitude = function (temps) {
// //     let max = temps[0];
// //     let min = temps[0];
// //   for(let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];
// //     if(typeof curTemp !== 'number') continue; //Continue is when the rest of the iteration for 'error' will not be made because it is not a number therefore it will continue to 9 since it is a number
// //     if(curTemp > max) max = curTemp;
// //     if(curTemp < min) min = curTemp;
// //   };
// //   console.log(max, min);
// //   return max - min;
// // };

// // const amplitude = calcTempAmplitude(temperatures);
// // console.log(amplitude);

// //PROBLEM 2: Function should receive 2 arrays of temps

// //1) Understanding the problem
// //With 2 arrays, should we implement the functionality twice? NO, just merge 2 arrays

// //2) Breaking the problem into sub-problems
// //Merge 2 arrays

// const calcTempAmplitudeBug = function (t1, t2) {
//   // const array1 = ['a', 'b', 'c'];
//   // const array2 = ['d', 'e', 'f'];
//   // const array3 = array1.concat(array2); Temps variable below is the real example. t1 and t2 are arrays.
//   const temps = t1.concat(t2); //Bring the two arrays into one
//   console.log(temps)

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i]; //Array index value
//     if (typeof curTemp !== 'number') continue; //Only iterate if its a number.
//     if (curTemp > max) max = curTemp; //If the value is greater than max, max will take on that number and iterate again until it is the max in the array.
//     if (curTemp < min) min = curTemp; //If the value is less than min, min will take on that number and iterate again until it is the min in the array.
//   }
//   console.log(max, min); //Show the max and min value
//   return max - min; //Minus them to get the amplitude value
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]); //2 arrays passed on as arguments to the parameters t1 and t2 in the calcTempAmplitudeBug variable with an anonymous function (function expression)
// console.log(amplitudeBug); //Show the value of the amplitude by returning it from the function calcTempAmplitude

// //How I solved the issue of concatenation

// // const measureKelvin = function (){
// //   const measurement = {
// //     type: 'temp',
// //     unit: 'celsius',
// //     value: prompt('Degrees celsius:')
// //   }
// //   console.log(typeof measurement.value)
// //   const convert = Number(measurement.value);
// //   const kelvin = convert + 273;
// //   return kelvin
// // };

// // console.log(measureKelvin());

// //How it was solved by instructor
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),//Convert string received from the user input into a number
//   };
//   console.table(measurement); //#1 See object. It becomes apparent that the value is stored as a string.
//   // debugger; //Automatically takes you to the debugger pane
//   const kelvin = measurement.value + 273; //Add conversion number to 273
//   return kelvin; //return result
// };

// console.log(measureKelvin()); //Call function

// //Execution context exercise

// //Numbering is the order in which it gets executed
// const name = 'Jonas'; //#1 Top level code or Global context

// const first = () => {
//   // #2 Top level code or Global context
//   //Function body only executed when called.
//   let a = 1; // #5 first () execution context
//   const b = second(7, 9); // #6 first () execution context. Currently unknown because the second() function needs to run first. arguments = [7, 9] is part of the second() execution context. It is an array of passed arguments available in all regular functions except for arrow. 
//   a = a + b; //#9
//   return a; //#10
// };

// function second(x, y) { // #3 Top level code or Global context
//   const c = 2;// #7 second() execution context
//   return c; //#8
// };

// const z = first(); // #4 Top level code or global context. This is unknown in the global because it needs the first function to run first.

// //Values only become known during execution
// //When the second function returns, it will be removed from the call stack. Only the global context will remain until the browser is closed.
// //JavaScript has only one thread of execution

// //Scoping

// function calcAge6(birthYear) {
//   let output = `${firstName} YOU ARE BORN`
//   const age = 2037 - birthYear;
//   console.log(firstName); //JS did not find this variable in the scope. It did a variable look up to see if it exists in its parent, and indeed it exists in the global scope. Even though firstName is declared after the function calcAge6, due to the execution context, it comes first in the global execution context because it is declared before the function is called in line 706, therefore, it is part of the code global scope already.

//   if (birthYear >= 1981 && birthYear <= 1996) {
//     var millenial = true;
//     const firstName = 'Steven'
//     const str = `Oh, you're a millenial, ${firstName}`; //Due to JavaScript's scope chain, it will use Steven instead of Jonas since the variable exists within the same scope or closer scope in the variable look up.
//     console.log(str);

//     function add(a, b) {
//       return a + b;
//     }
//     add(2,3);//This will work
//     output = 'New output' //This will update line 700 since the variable is 'let'
//   }
//   console.log(output); //This will log the new updated output in line 714. However if 714 was a const variable, then output would have two variables, both line 700 and 714.
//   add(2, 3); //This will not work because it is outside of the scope of the if block statement. This is only applicable in strict mode. If it is not in strict mode, it will work.
//   console.log(str) //This will not work because const is block-scoped
//   console.log(millenial) //This will work because var is function scoped
//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output)
//   }
//   printAge();

//   return age;
// };

// const firstName = 'Jonas'
// calcAge6(1991);
// console.log(age); //Will not work because age is within the scope of calcAge6
// printAge(); //Will not work because it is accessible only within calcAge6

// //Hoisting

// //Variable hoisting
// const myName = 'Yousef';

// if (myName === 'Yousef') {
//   console.log(varHoisting); //Undefined value
//   console.log(letHoisting); // ReferenceError: Cannot access 'letHoisting' before initialization.
//   console.log(`Yousef is a ${job1}`); //Temporal Dead Zone for job variable. ReferenceError: Cannot access 'job' before initialization.
//   let letHoisting = 'I will be a reference error';
//   var varHoisting = 'I will be undefined';
//   const age = 2037 - 1999; //TDZ for job variable
//   console.log(age); //TDZ for job variable
//   const job = 'teacher'; //Declared
//   console.log(x); //ReferenceError: x is not defined. No longer TDZ for job variable and can be accessed.
// }

// //Function hoisting

// console.log(addDecl(2, 3)); //It will work because it is a function declaration
// console.log(addExpr(2, 3)); //ReferenceError: Cannot access 'addExpr' before initialization.
// console.log(addArrow(2, 3)); //ReferenceError: Cannot access 'addArrow' before initialization.

// function addDecl(a, b) {
//   return a + b;
// };

// const addExpr = function (a, b) { 
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //Example

// if(!numProducts) deleteShoppingCart(); //If there is no products, delete the shopping cart. It will deleted the products because numProducts is not 10, it is currently undefined which will execute the function deleteShoppingCart. 
// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted');
// };

// //This keyword

// //Method

// const joseph = {
//   name: 'Joseph',
//   year: 1999,
//   calcAge: function () { //calcAge is a method
//     return 2037 - this.year; //this is referring to the object 'joseph' that is accessing the year property with the value 1999
//   }
// };

// joseph.calcAge();//Object calling the method

// //

// console.log(this); //Global scope is the window object/global object

// //Function expression
// const calcAgeThis = function(birthYear) {
//   console.log(20377- birthYear)
//   console.log(this); //undefined in strict mode otherwise window object
// }

// //Arrow function
// const calcAgeThisArrow = birthYear => {
//   console.log(20377 - birthYear);
//   console.log(this); //Shows the window object using the lexical this keyword because it refers to the nearest parent scope
// };

// calcAgeThisArrow(1993);

// const jones = {
//   year: 1993,
//   calcAge: function () {
//     console.log(this); //jones object
//     console.log(2046 - this.year)//Instead of inserting an argument in line 815 we can use access the value from the object immediately and use it for the calculation
//   },
// };

// jones.calcAge(); //Just to call the method

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jones.calcAge //This is called method borrowing

// matilda.calcAge(); //Calling the method that is now inserted in matilda object will produce a console log of the object which is now matilda and the calculation which will be 2046 - 2017 = 29.

// const yousefObject2 = {
//   firstName: 'Yousef',
//   lastName: 'Salih',
//   job: 'Front-End Developer',
//   friends: ['Sam', 'Bill', 'Jack'],
//   hasDriversLicense: true,
//   birthYear: 1990,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.birthYear);
//     //Solution 1 to the undefined this keyword below
//   //   const self = this; //self or that is common to use
//   //   const isMillenial = function() {
//   //     console.log(self.year >= 1981 && self.year <= 1996);//this keyword is undefined
//   //   };

//   //   isMillenial(); //Regular function call inside a method so the this keyword would be undefined.
//   // },

//     //Solution 2 to the undefined this keyword below using an arrow function since it doesn't have its own this keyword so it inherits it from its parent which is the calcAge method. The calcAge method this keyword refers to the object yousefObject2.
//         const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);//
//     };

//     isMillenial();
//   },

//     //this keyword undefined
//   //   const isMillenial = function() {
//   //     console.log(this.year >= 1981 && this.year <= 1996);//this keyword is undefined
//   //   };

//   //   isMillenial(); //Regular function call inside a method so the this keyword would be undefined.
//   // },

//   greet: () => console.log(`Hey ${this.firstName}`), //Object literal is not treated like a block scope and for that reason the 'this' keyword will not take it from this object but rather from the global scope for an arrow function because an arrow function doesn't receive its own this keyword. Never use an arrow function as a method as a best practice.
// };

// yousefObject2.greet(); //firstName is undefined
// yousefObject2.calcAge();

// //Arguments keyword is only available in regular functions
// const addExpr1 = function (a, b) {
//   console.log(arguments); //Arguments is an array of the values assigned below (2 and 5). We can have more arguments even if there are less parameters available. In this case only 2 (a and b) for line 873.
//   return a + b;
// };

// addExpr1(2, 5);
// addExpr1(2, 5, 8, 12)

// var addArrow1 = (a, b) => {
//   console.log(arguments);
//   return a + b
// };

// addArrow1(23, 23)//This will not work because arrow functions don't have access to the arguments keyword

// //Regular functions: Declaration and expression


//Primitives Vs. Objects (Primitive Vs. Reference Types)

let age = 30;
let oldAge = age;
age = 31;

console.log(age); //31
console.log(oldAge);//30 - declared before the update on line 889

const me = {
  name: 'Yousef',
  age: 30,
};

const friend = me;
friend.age = 29; //This will update me.age as well to 29

console.log('Friend', friend);
console.log('Me', me);

//Primitive data types (Primitives types when it comes memory management): Number, string, boolean, undefined, null symbol, bigint

//Everything else are objects.

//Objects (Reference types in memory management): Object literal, arrays, functions, many more...

//All objects or reference types are stored in the memory heap (JS Engine). Primitives are stored in the call stack (execution context).

//Process for the example above (887-892) for primitive values:
//#1 JavaScript will create a Unique identifier with the variable name age in the call stack because it is a primitive value
//#2 Then a piece of memory will be allocated with a certain address like 0001. 
//#3 The value '30' will be stored in the memory address 0001.
//#4 Identifier points to the address and not the value itself. So age is equal to 0001 with the value of 30.
//#5 oldAge will point to the same memory address 0001. Making the value 30.
//#6 In line 889, it will not change the value to 31 for address 0001. A value at a certain memory address is immutable (cannot change). Instead, a new piece of memory will be created 0002 which will have the value 31 for line 889.

//Process for the second example above (894-903) for reference values:
//#1 When a new object is created, such as the me object above, it is stored in the heap
//#2 A memory address D30F will be created and then the value itself {name: 'yousef', age: 30,}
//#3 me identifier will be created in the call stack with a memory address of 0003 with a value of D30F (which is the memory address in the heap) and it will point to the heap address D30F (reference). This is why we call objects reference types. Identifier --> Memory address in stack--> Value --> Memory address in heap --> Value (Where object is stored). It is this way because sometimes the object is too large to be stored in the stack. The heap is like an unlimited memory pool.
//#4 Created a new variable called friend line 899. friend identifier --> call stack memory address 0003 (me) --> Value D30F --> Memory address in heap D30F --> Value (Where object is stored). Therefore me and friend objects are the same.
//#5 Now changing a property in the friend object, which is under address D30F (line 900). NOTE: All variables declared with const are immuatable is only applicable to primitive values and NOT reference values (ex. objects)
//#6 the me object age is also 27 are both pointing to the same object in the memory heap. Both identifiers me and friend are pointing to 0003 with value D30F which points to the address D30F in the heap with the updated value.


let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis'
console.log(lastName, oldLastName) //Davis Williams. Each primitive value is stored in its own memory in the stack.

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;//Behind the scenes, we're just copying the reference to the object jessica
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica); //Both will have Davis as last name. It happened because when we copied the object, it didn't create a new object in the heap for marriedJessica. Its another variable in the stack that holds the reference to the original object (same memory address in the heap). In the stack, they both hold the same memory address reference. Two different identifiers but the same address in the stack, same value in the stack which points to the same object in the heap.
console.log('After marriage:', marriedJessica); //Both will have Davis as last name

//We cant assign a completely different object for marriedJessica such as the below
//marriedJessica = {};//This will not work because it will be stored at a different position in memory in the heap, therefore, the reference will have to change here in this variable. This will not work because it is in the stack and it is a constant we cannot change the value in the stack. We cannot change the value to a new memory address, therefore, it wont work. If it was a 'let' then its possible.

//Copying objects without refering to the same address in the heap

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //Merges jessica2 into the new empty object. Object.assign will only copy a shallow copy the first level properties. If we have an object inside an object, the inner object will still be the same. A deep clone will copy all.
jessicaCopy.lastName = 'Davis';
console.log('Before Marriage: ', jessica2);
console.log('After Marriage: ', jessicaCopy); //Updates the last name from Williams to Davis because it is a new object and not a reference. Therefore, a new memory in the heap and jessicaCopy identified is referencing to the new object.

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Marriage: ', jessica2); //Both objects will have the family object values because it is one level deeper than the first level due to Object.assign. A deep clone will be necessary by using an external library like Lo-Dash
console.log('After Marriage: ', jessicaCopy);

//Array Destructuring
//A way of unpacking values from an array or an object into seperate variables. Break a complex data structure down into smaller data structure like a variable. 

const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({starterIndex, mainIndex, time = '20:00', address}) { //Destructuring and must match the property names in the property object orderDelivery or inputting it directly in the parameters
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient); //Mushrooms
    console.log(otherIngredients); //['Onion', 'Olives', 'Spinach']
  },
 
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  // time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//Before destructuring
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//After destructuring
const [x, y, z] = arr; //[x, y, z] is not an array. It is just a destructuring assignment. You must declare the variables using const.
console.log(x, y, z);
console.log(arr); //Not affected by destructuring

const [first, second] = restaurant.categories;
const [zero, , two] = restaurant.categories;
console.log(first, second); //Italian Pizzeria
console.log(zero, two); //Italian Vegetarian because there is a gap in [1]


//Switch variables before destructuring
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Before destructuring
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// After destructuring
[main, secondary] = [secondary, main]
console.log(main, secondary);

console.log(restaurant.order(2, 0)); //Array ['Garlic Bread', 'Pizza']
const [starter, mainCourse] = restaurant.order(2, 0); //Destructure
console.log(starter, mainCourse); //Garlic Bread Pizza - as a string not in an array

//Nested Destructuring (Array within an array)
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j); //2, Array [5, 6]

const [i, , [j, k]] = nested;
console.log(i, j, k); //2, 5, 6


//Default values (dont know the length of the array)
// const [p, q, r] = [8, 9] //We don't know how long the array [8,9] is
// console.log(p, q, r); //8, 9, undefined    ....Undefined because the value doesn't exist in the array above.


// const [p = 1, q = 1, r = 1] = [8, 9] //Setting 1 as the default value
// console.log(p, q, r); //8, 9, 1. It will turn to one as shown because r has a default of 1 if the array doesn't have it.

const [p = 1, q = 1, r = 1] = [8] //If 9 is removed from the array
console.log(p, q, r); //8, 1, 1 The rest will be updated to their default values

//Destructuring Objects: Useful for third party data

const { restaurantName, openingHours, categories } = restaurant; //The order in object destructuring does not matter. Destructuring the right side of the assignment operator, therefore, the object restaurant.

console.log(restaurantName, openingHours, categories);

const {restaurantName : restaurantCompany, openingHours: hours, categories: tags} = restaurant; //Changing the property names
console.log(restaurantCompany, hours, tags); //Same as line 1058

//Setting default value
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters); //menu default value will be an empty array.


//Mutating variables
let d = 111;
let h = 999;
const obj = { d: 23, h:7, c:14 };
({d, h} = obj);
console.log(d, h);

//Nested objects
const {fri} = openingHours;
console.log(fri); //Object {open: 11, close: 23}

const {fri: {open, close}} = openingHours;//Further destructure by accessing the open and close values
console.log(open, close); //11 23

const {fri: {open: o, close: clo}} = openingHours;//Further destructure by simplifying the variable/property names
console.log(o, clo); //11 23

//Spread Operator - creating a new array or passing values into a function

const array = [7, 8, 9];
const badNewArray = [1, 2, array[0], array[1], array[2]];
console.log(badNewArray); // [1, 2, 7, 8, 9]

const newArray = [1, 2, ... array]; //You dont need to write out the above by using ...
console.log(newArray); //[1, 2, 7, 8, 9] 

console.log(...newArray); //Individually 1 2 7 8 9
const newMenu = [...restaurant.mainMenu, 'Gnocci']; //Adds Gnocci to the menu but not changing the original array. It creates a new array under newMenu
console.log(newMenu); //["Pizza", "Pasta", "Risotto", "Gnocci"]

//Copy array
const mainMenuCopy = [...restaurant.mainMenu]; //Shallow copy of the main menu (Similar Object assign)
console.log(mainMenuCopy);

//Join 2 arrays
const awesomeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(awesomeMenu);

//Spread operators works on all kinds of iterables, not just arrays. An iterable is things like arrays, strings, maps, or sets but NOT OBJECTS.

const string = 'Jonas'

const letters = [...string];
console.log(letters); //Creates an array ["J", "O", "N", "A", "S"]
console.log(...string);//J o n a s - creates the individual elements

//Multiple values seperated by a comma are usually only expected when we pass arguments into a function or when we build a new array.

// //Template literals do not expect multiple values separated by a comma
// console.log(`${...str} Salih`); //will not work

const ingredients = [
  // prompt(`Lets make pasta! Ingredient 1?`),
  // prompt(`Ingredient 2?`),
  // prompt(`Ingredient 3?`),
];

console.log(ingredients);

// //Previous way of putting in the values we get from the array ingredients into orderPasta property method
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])

//Better way to do the above
restaurant.orderPasta(...ingredients); //Here is your delicious pasta with X, Y, Z

//Objects: Not iterables
//Below is a shallow copy
const newRestaurant = {...restaurant, founder: 'Guiseppe', foundedIn: 1998}
console.log(newRestaurant);

//Instead of object.assign()

const restaurantCopy = {...restaurant};
restaurantCopy.restaurantName = 'Riestorante Rome';
console.log(restaurantCopy.restaurantName); //Riestorance Rome
console.log(restaurant.restaurantName); //Classico Italiano

//Rest Pattern and Rest parameters
//Rest pattern does the opposite of the spread operator (Build new arrays/pass multiple values into a function/spread the array into individual elements.). Rest pattern uses the same syntax and rather than unpacking multiple elements, it packs multiple elements together.

//Below is Destructuring (line 1164-1178)
//Spread because on RIGHT side of = (assignment operator)
const arraySpread = [1, 2, ...[3, 4]]; //[1, 2, 3, 4]
console.log(arraySpread);

//REST because on LEFT side of = (assignment operator)
const [g, f, ...others] = [1, 2, 3, 4, 5];
console.log(g, f, others); //1 2 [3, 4, 5]

const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, Risotto, otherFood);// Pizza Ristotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//Objects
const { sat, ...weekdays } = restaurant.openingHours; //Restaurant.openingHours (destructuring). The rest takes out sat and creates a new object called weekdays for the remaining properites and values
console.log(weekdays); //Object {thu, fri} is the new weekdays object

//Functions
const add = function (...numbers) { //REST = Multiple values and packs it into one array. These are called rest arguments
  let sum = 0;
  for (let i = 0; i < numbers.length; i++ ){
    sum += numbers[i];
    console.log(sum); //2, 5 (Because it adds 0+2 then in the next iteration 2+3 =5)
  };
  console.log(numbers); //[2,3] //conversion from seperate values into one array
};

add(2,3) //[2, 3] = 5
add(5,3,7,2) //[5,3,7,2] = 17
add(8,2,5,3,2,1,4) //[8,2,5,3,2,1,4] = 25

const t = [23,5,7];
add(...t); //spread operator. Same as writing manually 23, 5, 7 into the function add as arguments

restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
restaurant.orderPizza('mushrooms'); //Since the remaining is not available, it becomes an empty array and only mushrooms will show up

//Spread operator is used where we would otherwise write values, seperated by a commas. The rest pattern is basically used where we would otherwise write variables names seperated by commas and not values seperated by commas.

//Short Circuiting (&& and ||)

console.log('--- OR ----');
//Use ANY data type, return ANY data type, short-circuiting evaluation
console.log(3 || 'Jonas'); //If the first operaant is truthy, it will take the first one =short circuting

console.log('' || 'Jonas'); //Jonas because it is truthy
console.log(true || 0); //true because it is truthy
console.log(undefined || null); //undefined and null are both falsy but no short circuiting so it takes the second value
console.log(undefined || 0 || '' || 'Hello' || 23 || null ); //Hello because it is the first truthy value (short-circuit)

// restaurant.numGuests = 23; //This will make line 1220 and 1223 to 23
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //10 because numGuests doesn't exist so it sets it to 10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); //10 // since restaurant.numGuests is undefined it is falsy so it will take the second value which is 10. Alternatively 23 if line 1218 is active because it is the first truthy value even though both 23 and 10 are truthy. 

console.log('--- AND ----');
console.log(0 && 'Jonas'); //shows 0, which is the opposite of the OR operator. It returns the first falsy value which in this case is 0.
console.log(7 && 'Jonas'); //shows 'Jonas', which is the opposite of the OR operator, since the first is truthy and the second is truthy as well.

console.log('Hello' && 23 && null && 'jonas');//Null since it is the first falsy value and the whole evaluation is false so it shortcircuits

if (restaurant.orderPizza) { //If it exists
  restaurant.orderPizza('mushrooms', 'spinach'); //then execute
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach') //The first part restaurant.orderPizza is the same as line 1231. This will be truthy so it will continue and execute by calling the function orderPizza and passing the arguments.

//OR operator will return the first truthy value of all the operants or the last operant if all the values are falsy
//On the other hand, the & operator will return the first falsy value or the last value if all of them are truthy




