'use strict';
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
// //   console.log(output); //This will log the new updated output in line 714. However if 714 was a const variable, then output would have two variables, both line 700 and 714.
// //   add(2, 3); //This will not work because it is outside of the scope of the if block statement. This is only applicable in strict mode. If it is not in strict mode, it will work.
// //   console.log(str) //This will not work because const is block-scoped
// //   console.log(millenial) //This will work because var is function scoped
// //   function printAge() {
// //     const output = `You are ${age}, born in ${birthYear}`;
// //     console.log(output)
// //   }
// //   printAge();

// //   return age;
// // };

// // const firstName = 'Jonas'
// // calcAge6(1991);
// // console.log(age); //Will not work because age is within the scope of calcAge6
// // printAge(); //Will not work because it is accessible only within calcAge6

// // //Hoisting

// // //Variable hoisting
// // const myName = 'Yousef';

// // if (myName === 'Yousef') {
// //   console.log(varHoisting); //Undefined value
// //   console.log(letHoisting); // ReferenceError: Cannot access 'letHoisting' before initialization.
// //   console.log(`Yousef is a ${job1}`); //Temporal Dead Zone for job variable. ReferenceError: Cannot access 'job' before initialization.
// //   let letHoisting = 'I will be a reference error';
// //   var varHoisting = 'I will be undefined';
// //   const age = 2037 - 1999; //TDZ for job variable
// //   console.log(age); //TDZ for job variable
// //   const job = 'teacher'; //Declared
// //   console.log(x); //ReferenceError: x is not defined. No longer TDZ for job variable and can be accessed.
// // }

// // //Function hoisting

// // console.log(addDecl(2, 3)); //It will work because it is a function declaration
// // console.log(addExpr(2, 3)); //ReferenceError: Cannot access 'addExpr' before initialization.
// // console.log(addArrow(2, 3)); //ReferenceError: Cannot access 'addArrow' before initialization.

// // function addDecl(a, b) {
// //   return a + b;
// // };

// // const addExpr = function (a, b) {
// //   return a + b;
// // };

// // const addArrow = (a, b) => a + b;

// // //Example

// // if(!numProducts) deleteShoppingCart(); //If there is no products, delete the shopping cart. It will deleted the products because numProducts is not 10, it is currently undefined which will execute the function deleteShoppingCart.
// // var numProducts = 10;
// // function deleteShoppingCart() {
// //   console.log('All products deleted');
// // };

// // //This keyword

// // //Method

// // const joseph = {
// //   name: 'Joseph',
// //   year: 1999,
// //   calcAge: function () { //calcAge is a method
// //     return 2037 - this.year; //this is referring to the object 'joseph' that is accessing the year property with the value 1999
// //   }
// // };

// // joseph.calcAge();//Object calling the method

// // //

// // console.log(this); //Global scope is the window object/global object

// // //Function expression
// // const calcAgeThis = function(birthYear) {
// //   console.log(20377- birthYear)
// //   console.log(this); //undefined in strict mode otherwise window object
// // }

// // //Arrow function
// // const calcAgeThisArrow = birthYear => {
// //   console.log(20377 - birthYear);
// //   console.log(this); //Shows the window object using the lexical this keyword because it refers to the nearest parent scope
// // };

// // calcAgeThisArrow(1993);

// // const jones = {
// //   year: 1993,
// //   calcAge: function () {
// //     console.log(this); //jones object
// //     console.log(2046 - this.year)//Instead of inserting an argument in line 815 we can use access the value from the object immediately and use it for the calculation
// //   },
// // };

// // jones.calcAge(); //Just to call the method

// // const matilda = {
// //   year: 2017,
// // };

// // matilda.calcAge = jones.calcAge //This is called method borrowing

// // matilda.calcAge(); //Calling the method that is now inserted in matilda object will produce a console log of the object which is now matilda and the calculation which will be 2046 - 2017 = 29.

// // const yousefObject2 = {
// //   firstName: 'Yousef',
// //   lastName: 'Salih',
// //   job: 'Front-End Developer',
// //   friends: ['Sam', 'Bill', 'Jack'],
// //   hasDriversLicense: true,
// //   birthYear: 1990,
// //   calcAge: function () {
// //     console.log(this);
// //     console.log(2037 - this.birthYear);
// //     //Solution 1 to the undefined this keyword below
// //   //   const self = this; //self or that is common to use
// //   //   const isMillenial = function() {
// //   //     console.log(self.year >= 1981 && self.year <= 1996);//this keyword is undefined
// //   //   };

// //   //   isMillenial(); //Regular function call inside a method so the this keyword would be undefined.
// //   // },

// //     //Solution 2 to the undefined this keyword below using an arrow function since it doesn't have its own this keyword so it inherits it from its parent which is the calcAge method. The calcAge method this keyword refers to the object yousefObject2.
// //         const isMillenial = () => {
// //       console.log(this.year >= 1981 && this.year <= 1996);//
// //     };

// //     isMillenial();
// //   },

// //     //this keyword undefined
// //   //   const isMillenial = function() {
// //   //     console.log(this.year >= 1981 && this.year <= 1996);//this keyword is undefined
// //   //   };

// //   //   isMillenial(); //Regular function call inside a method so the this keyword would be undefined.
// //   // },

// //   greet: () => console.log(`Hey ${this.firstName}`), //Object literal is not treated like a block scope and for that reason the 'this' keyword will not take it from this object but rather from the global scope for an arrow function because an arrow function doesn't receive its own this keyword. Never use an arrow function as a method as a best practice.
// // };

// // yousefObject2.greet(); //firstName is undefined
// // yousefObject2.calcAge();

// // //Arguments keyword is only available in regular functions
// // const addExpr1 = function (a, b) {
// //   console.log(arguments); //Arguments is an array of the values assigned below (2 and 5). We can have more arguments even if there are less parameters available. In this case only 2 (a and b) for line 873.
// //   return a + b;
// // };

// // addExpr1(2, 5);
// // addExpr1(2, 5, 8, 12)

// // var addArrow1 = (a, b) => {
// //   console.log(arguments);
// //   return a + b
// // };

// // addArrow1(23, 23)//This will not work because arrow functions don't have access to the arguments keyword

// // //Regular functions: Declaration and expression

// //Primitives Vs. Objects (Primitive Vs. Reference Types)

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age); //31
// console.log(oldAge); //30 - declared before the update on line 889

// const me = {
//   name: 'Yousef',
//   age: 30,
// };

// const friend = me;
// friend.age = 29; //This will update me.age as well to 29

// console.log('Friend', friend);
// console.log('Me', me);

// //Primitive data types (Primitives types when it comes memory management): Number, string, boolean, undefined, null symbol, bigint

// //Everything else are objects.

// //Objects (Reference types in memory management): Object literal, arrays, functions, many more...

// //All objects or reference types are stored in the memory heap (JS Engine). Primitives are stored in the call stack (execution context).

// //Process for the example above (887-892) for primitive values:
// //#1 JavaScript will create a Unique identifier with the variable name age in the call stack because it is a primitive value
// //#2 Then a piece of memory will be allocated with a certain address like 0001.
// //#3 The value '30' will be stored in the memory address 0001.
// //#4 Identifier points to the address and not the value itself. So age is equal to 0001 with the value of 30.
// //#5 oldAge will point to the same memory address 0001. Making the value 30.
// //#6 In line 889, it will not change the value to 31 for address 0001. A value at a certain memory address is immutable (cannot change). Instead, a new piece of memory will be created 0002 which will have the value 31 for line 889.

// //Process for the second example above (894-903) for reference values:
// //#1 When a new object is created, such as the me object above, it is stored in the heap
// //#2 A memory address D30F will be created and then the value itself {name: 'yousef', age: 30,}
// //#3 me identifier will be created in the call stack with a memory address of 0003 with a value of D30F (which is the memory address in the heap) and it will point to the heap address D30F (reference). This is why we call objects reference types. Identifier --> Memory address in stack--> Value --> Memory address in heap --> Value (Where object is stored). It is this way because sometimes the object is too large to be stored in the stack. The heap is like an unlimited memory pool.
// //#4 Created a new variable called friend line 899. friend identifier --> call stack memory address 0003 (me) --> Value D30F --> Memory address in heap D30F --> Value (Where object is stored). Therefore me and friend objects are the same.
// //#5 Now changing a property in the friend object, which is under address D30F (line 900). NOTE: All variables declared with const are immuatable is only applicable to primitive values and NOT reference values (ex. objects)
// //#6 the me object age is also 27 are both pointing to the same object in the memory heap. Both identifiers me and friend are pointing to 0003 with value D30F which points to the address D30F in the heap with the updated value.

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName); //Davis Williams. Each primitive value is stored in its own memory in the stack.

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica; //Behind the scenes, we're just copying the reference to the object jessica
// marriedJessica.lastName = 'Davis';

// console.log('Before marriage:', jessica); //Both will have Davis as last name. It happened because when we copied the object, it didn't create a new object in the heap for marriedJessica. Its another variable in the stack that holds the reference to the original object (same memory address in the heap). In the stack, they both hold the same memory address reference. Two different identifiers but the same address in the stack, same value in the stack which points to the same object in the heap.
// console.log('After marriage:', marriedJessica); //Both will have Davis as last name

// //We cant assign a completely different object for marriedJessica such as the below
// //marriedJessica = {};//This will not work because it will be stored at a different position in memory in the heap, therefore, the reference will have to change here in this variable. This will not work because it is in the stack and it is a constant we cannot change the value in the stack. We cannot change the value to a new memory address, therefore, it wont work. If it was a 'let' then its possible.

// //Copying objects without refering to the same address in the heap

// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2); //Merges jessica2 into the new empty object. Object.assign will only copy a shallow copy the first level properties. If we have an object inside an object, the inner object will still be the same. A deep clone will copy all.
// jessicaCopy.lastName = 'Davis';
// console.log('Before Marriage: ', jessica2);
// console.log('After Marriage: ', jessicaCopy); //Updates the last name from Williams to Davis because it is a new object and not a reference. Therefore, a new memory in the heap and jessicaCopy identified is referencing to the new object.

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before Marriage: ', jessica2); //Both objects will have the family object values because it is one level deeper than the first level due to Object.assign. A deep clone will be necessary by using an external library like Lo-Dash
// console.log('After Marriage: ', jessicaCopy);

// //Array Destructuring
// //A way of unpacking values from an array or an object into seperate variables. Break a complex data structure down into smaller data structure like a variable.

// const restaurant = {
//   restaurantName: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex,
//     mainIndex,
//     time = '20:00',
//     address,
//   }) {
//     //Destructuring and must match the property names in the property object orderDelivery or inputting it directly in the parameters
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient); //Mushrooms
//     console.log(otherIngredients); //['Onion', 'Olives', 'Spinach']
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// restaurant.orderDelivery({
//   // time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //Before destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //After destructuring
// const [x, y, z] = arr; //[x, y, z] is not an array. It is just a destructuring assignment. You must declare the variables using const.
// console.log(x, y, z);
// console.log(arr); //Not affected by destructuring

// const [first, second] = restaurant.categories;
// const [zero, , two] = restaurant.categories;
// console.log(first, second); //Italian Pizzeria
// console.log(zero, two); //Italian Vegetarian because there is a gap in [1]

// //Switch variables before destructuring
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //Before destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// // After destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0)); //Array ['Garlic Bread', 'Pizza']
// const [starter, mainCourse] = restaurant.order(2, 0); //Destructure
// console.log(starter, mainCourse); //Garlic Bread Pizza - as a string not in an array

// //Nested Destructuring (Array within an array)
// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j); //2, Array [5, 6]

// const [i, , [j, k]] = nested;
// console.log(i, j, k); //2, 5, 6

// //Default values (dont know the length of the array)
// // const [p, q, r] = [8, 9] //We don't know how long the array [8,9] is
// // console.log(p, q, r); //8, 9, undefined    ....Undefined because the value doesn't exist in the array above.

// // const [p = 1, q = 1, r = 1] = [8, 9] //Setting 1 as the default value
// // console.log(p, q, r); //8, 9, 1. It will turn to one as shown because r has a default of 1 if the array doesn't have it.

// const [p = 1, q = 1, r = 1] = [8]; //If 9 is removed from the array
// console.log(p, q, r); //8, 1, 1 The rest will be updated to their default values

// //Destructuring Objects: Useful for third party data

// const { restaurantName, openingHours, categories } = restaurant; //The order in object destructuring does not matter. Destructuring the right side of the assignment operator, therefore, the object restaurant.

// console.log(restaurantName, openingHours, categories);

// const {
//   restaurantName: restaurantCompany,
//   openingHours: hours,
//   categories: tags,
// } = restaurant; //Changing the property names
// console.log(restaurantCompany, hours, tags); //Same as line 1058

// //Setting default value
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters); //menu default value will be an empty array.

// //Mutating variables
// let d = 111;
// let h = 999;
// const obj = { d: 23, h: 7, c: 14 };
// ({ d, h } = obj);
// console.log(d, h);

// //Nested objects
// const { fri } = openingHours;
// console.log(fri); //Object {open: 11, close: 23}

// const {
//   fri: { open, close },
// } = openingHours; //Further destructure by accessing the open and close values
// console.log(open, close); //11 23

// const {
//   fri: { open: o, close: clo },
// } = openingHours; //Further destructure by simplifying the variable/property names
// console.log(o, clo); //11 23

// //Spread Operator - creating a new array or passing values into a function

// const array = [7, 8, 9];
// const badNewArray = [1, 2, array[0], array[1], array[2]];
// console.log(badNewArray); // [1, 2, 7, 8, 9]

// const newArray = [1, 2, ...array]; //You dont need to write out the above by using ...
// console.log(newArray); //[1, 2, 7, 8, 9]

// console.log(...newArray); //Individually 1 2 7 8 9
// const newMenu = [...restaurant.mainMenu, 'Gnocci']; //Adds Gnocci to the menu but not changing the original array. It creates a new array under newMenu
// console.log(newMenu); //["Pizza", "Pasta", "Risotto", "Gnocci"]

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu]; //Shallow copy of the main menu (Similar Object assign)
// console.log(mainMenuCopy);

// //Join 2 arrays
// const awesomeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(awesomeMenu);

// //Spread operators works on all kinds of iterables, not just arrays. An iterable is things like arrays, strings, maps, or sets but NOT OBJECTS.

// const string = 'Jonas';

// const letters = [...string];
// console.log(letters); //Creates an array ["J", "O", "N", "A", "S"]
// console.log(...string); //J o n a s - creates the individual elements

// //Multiple values seperated by a comma are usually only expected when we pass arguments into a function or when we build a new array.

// // //Template literals do not expect multiple values separated by a comma
// // console.log(`${...str} Salih`); //will not work

// const ingredients = [
//   // prompt(`Lets make pasta! Ingredient 1?`),
//   // prompt(`Ingredient 2?`),
//   // prompt(`Ingredient 3?`),
// ];

// console.log(ingredients);

// // //Previous way of putting in the values we get from the array ingredients into orderPasta property method
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])

// //Better way to do the above
// restaurant.orderPasta(...ingredients); //Here is your delicious pasta with X, Y, Z

// //Objects: Not iterables
// //Below is a shallow copy
// const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 };
// console.log(newRestaurant);

// //Instead of object.assign()

// const restaurantCopy = { ...restaurant };
// restaurantCopy.restaurantName = 'Riestorante Rome';
// console.log(restaurantCopy.restaurantName); //Riestorance Rome
// console.log(restaurant.restaurantName); //Classico Italiano

// //Rest Pattern and Rest parameters
// //Rest pattern does the opposite of the spread operator (Build new arrays/pass multiple values into a function/spread the array into individual elements.). Rest pattern uses the same syntax and rather than unpacking multiple elements, it packs multiple elements together.

// //Below is Destructuring (line 1164-1178)
// //Spread because on RIGHT side of = (assignment operator)
// const arraySpread = [1, 2, ...[3, 4]]; //[1, 2, 3, 4]
// console.log(arraySpread);

// //REST because on LEFT side of = (assignment operator)
// const [g, f, ...others] = [1, 2, 3, 4, 5];
// console.log(g, f, others); //1 2 [3, 4, 5]

// const [pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, Risotto, otherFood); // Pizza Ristotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours; //Restaurant.openingHours (destructuring). The rest takes out sat and creates a new object called weekdays for the remaining properites and values
// console.log(weekdays); //Object {thu, fri} is the new weekdays object

// //Functions
// const add = function (...numbers) {
//   //REST = Multiple values and packs it into one array. These are called rest arguments
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum); //2, 5 (Because it adds 0+2 then in the next iteration 2+3 =5)
//   }
//   console.log(numbers); //[2,3] //conversion from seperate values into one array
// };

// add(2, 3); //[2, 3] = 5
// add(5, 3, 7, 2); //[5,3,7,2] = 17
// add(8, 2, 5, 3, 2, 1, 4); //[8,2,5,3,2,1,4] = 25

// const t = [23, 5, 7];
// add(...t); //spread operator. Same as writing manually 23, 5, 7 into the function add as arguments

// restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
// restaurant.orderPizza('mushrooms'); //Since the remaining is not available, it becomes an empty array and only mushrooms will show up

// //Spread operator is used where we would otherwise write values, seperated by a commas. The rest pattern is basically used where we would otherwise write variables names seperated by commas and not values seperated by commas.

// //Short Circuiting (&& and ||)

// console.log('--- OR ----');
// //Use ANY data type, return ANY data type, short-circuiting evaluation
// console.log(3 || 'Jonas'); //If the first operaant is truthy, it will take the first one =short circuting

// console.log('' || 'Jonas'); //Jonas because it is truthy
// console.log(true || 0); //true because it is truthy
// console.log(undefined || null); //undefined and null are both falsy but no short circuiting so it takes the second value
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello because it is the first truthy value (short-circuit)

// // restaurant.numGuests = 0;
// // // restaurant.numGuests = 23; //This will make line 1220 and 1223 to 23
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1); //10 because numGuests doesn't exist so it sets it to 10. Because 0 is a falsy value.

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2); //10 // since restaurant.numGuests is undefined it is falsy so it will take the second value which is 10. Alternatively 23 if line 1218 is active because it is the first truthy value even though both 23 and 10 are truthy.

// console.log('--- AND ----');
// console.log(0 && 'Jonas'); //shows 0, which is the opposite of the OR operator. It returns the first falsy value which in this case is 0.
// console.log(7 && 'Jonas'); //shows 'Jonas', which is the opposite of the OR operator, since the first is truthy and the second is truthy as well.

// console.log('Hello' && 23 && null && 'jonas'); //Null since it is the first falsy value and the whole evaluation is false so it shortcircuits

// if (restaurant.orderPizza) {
//   //If it exists
//   restaurant.orderPizza('mushrooms', 'spinach'); //then execute
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //The first part restaurant.orderPizza is the same as line 1231. This will be truthy so it will continue and execute by calling the function orderPizza and passing the arguments.

// //OR operator will return the first truthy value of all the operants or the last operant if all the values are falsy
// //On the other hand, the & operator will return the first falsy value or the last value if all of them are truthy

// //Nullish Coalescing Operator (??)

// // restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); //10 because 0 is falsy

// //Nullish values: null and undefined (NOT 0 or ''= truthy values within nullish coalescing operator)
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); //0 because it is truthy within this context. Therefore, it will take the first truthy value. Null and undefined are not taken as per line 1246 if 1244 is commented out.

// //Logical Assignment operators

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20, //Before nullish
//   numGuests: 0, //To demonstrate nullish coalescing operator. Line 1278 will show 10 because 0 is falsy.
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// //Short Circuiting example
// // rest1.numGuests = rest1.numGuests || 10; //If first value is truthy (20), it will take it otherwise it will be 10.
// // rest1.numGuests ||=10; //Same as above (OR assignment operator)
// // rest2.numGuests = rest2.numGuests || 10; //Since there is no value or undefined, making it falsy, it will resort to the default of 10

// // rest2.numGuests ||= 10; //Same as above

// //Nullish assignment operator()
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && '<ANONYMOUS>' //It will take the first value because it is falsy or undefined because there is no value in rest 1
// rest1.owner &&= '<ANONYMOUS>'; //Same as above
// // rest2.owner = rest2.owner && '<ANONYMOUS>' //It will take anonymous because the first one is truthy (There is Giovanni Rossi), therefore it will take the next falsy value
// rest2.owner &&= '<ANONYMOUS>'; //Same as above

// console.log(rest1.numGuests); //before nullish 20....with nullish it will be 0, because 0 is truthy with nullish
// console.log(rest2.numGuests); //before nullish 10....with nullish it will be 10 because numGuests is undefined so it is falsy therefore choosing 10

// console.log(rest1);
// console.log(rest2);


// //Looping arrays: The for-of loop (ES6). Avoids counters and conditions. 

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu); //Combines the two arrays. Array(7) [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto" ]

// //Simple for-of loop if its a single line
// for (const item of menu) console.log(item); //All items from the array above will be individually printed. It can be called anything besides item.

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
//   //1: Focaccia script.js:1314:11
//   // 2: Bruschetta script.js:1314:11
//   // 3: Garlic Bread script.js:1314:11
//   // 4: Caprese Salad script.js:1314:11
//   // 5: Pizza script.js:1314:11
//   // 6: Pasta script.js:1314:11
//   // 7: Risotto
// };

// //Destructuring version
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
//   //1: Focaccia script.js:1314:11
//   // 2: Bruschetta script.js:1314:11
//   // 3: Garlic Bread script.js:1314:11
//   // 4: Caprese Salad script.js:1314:11
//   // 5: Pizza script.js:1314:11
//   // 6: Pasta script.js:1314:11
//   // 7: Risotto
// };

// //Enhanced Object Literals

// const weekdays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] //Feature #3: Computing within an object


// //Feature #1: Add an object as a property to an existing object

// const openingHours1 = {
//   [weekdays1[3]]: { //Thu
//     open: 12,
//     close: 22,
//   },
//   [weekdays1[4]]: { //Fri
//     open: 11,
//     close: 23,
//   },
//   [weekdays1[5]]: { //Sat
//     open: 0, // Open 24 hours
//     close: 24,
//   },
//   // [`day- ${2 + 4}`] Example of Computation
// };

// console.log(openingHours1);

// const restaurant1 = {
//   restaurantName: 'Classico Enhanced',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex,
//     mainIndex,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta (ing1, ing2, ing3){ //Feature #2: Removing the function syntax (both semicolon and function keyword) for methods
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
//   openingHours1, //Adding the object openingHours1 from line 1340
// };

// console.log(restaurant1); //Includes openingHours1

// //Optional Chaining (ES2020)

// //Before optional chaining
// if (restaurant1.openingHours1 && restaurant1.openingHours1.mon) console.log(restaurant1.openingHours1.mon.open); // Error Undefined because thu does not exist.

// if (restaurant1.openingHours1.fri) console.log(restaurant1.openingHours1.fri.open); //11



// //With Optional chaining

// console.log(restaurant1.openingHours1.mon?.open); //Only if property of mon is available (NOT undefined or null) then access open otherwise make it undefined. If its 0 or a '' then a property exists.

// console.log(restaurant1.openingHours1?.mon?.open);//Only if property of openingHours1 is available then access mon otherwise make it undefined. In this case it will be undefined.

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days) {
//   // const open = restaurant1.openingHours1[day]?.open; //We need use bracket notation if we need use a variable name that is not a property name of the object. Ex: On sat, we open at undefined
//   // const open = restaurant1.openingHours1[day]?.open || 'closed'; // To remove the undefined value, we can use the OR operator and make it closed. However, it shows that on sat it is closed because zero is a falsy value.
//   const open = restaurant1.openingHours1[day]?.open ?? 'closed'; // To fix 1416, we use the null coalescing operator

//   console.log(`On ${day}, we open at ${open}`);
// };

// //Optional chaining on method

// console.log(restaurant1.order?.(0,1) ?? 'Method does not exist'); //It exists
// console.log(restaurant1.orderRisotto?.(0, 1) ?? 'Method does not exist'); //Method does not exist

// //Optional chaining on arrays
// const users = [{ name: 'Jonas', emai: 'hello@jonas.io'}];

// console.log(users[0]?.name ?? 'User array empty'); //Jonas
// console.log(users[4]?.name ?? 'User array empty'); //User array empty

// if(users.length > 0) console.log(users[0].name); else console.log('User empty array'); //Same as 1429-1430

// //Looping Objects (Indirectly since it is not an iterable)

// //Looping over keys/properties

// const properites = Object.keys(openingHours1);
// console.log(properites);//['thu', 'fri', 'sat']

// let openStr = `We are open on ${properites.length} days:`
// for (const day of properites) {
//   openStr += `${day},`
// }

// console.log(openStr);

// //Property Values
// const values = Object.values(openingHours1)
// console.log(values); //Returns an array of 3 objects with open and close keys

// const entries = Object.entries(openingHours1);
// console.log(entries);//Returns an array of 3 arrays (Thu,fri,sat)

// // for (const [key, value] of entries) {
// //   //value was destructured into {open, close}. key changed to day.
// //   // console.log(`On ${key} we open at ${open} and close at ${close}`); //On thu we open at 12 and close at 22
// //   console.log(`On ${key} we open at ${open} and close at ${close}`); //Same as above
// // }

// for (const [day, {open, close}] of entries) { //value was destructured into {open, close}. key changed to day (you can use anything besides key or day).
//   // console.log(`On ${key} we open at ${open} and close at ${close}`); //On thu we open at 12 and close at 22
//   console.log(`On ${day} we open at ${open} and close at ${close}`);//Same as above
// }

// //Data Structure: Sets (ES6)
// //Sets: A collection of unique values that are never duplicated. It can hold different data types. Sets are also iterables and the order of the elements are irrelevant. There are no indexes and there is no way of getting values out of a set. Use an array if you need to work with the values of the set or if the order of the values matter. One of the main use cases is removing duplicates in an array. 

// const ordersSet = new Set([
//   'Pasta', 
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza'
// ]);

// console.log(ordersSet); //['Pasta', 'Pizza', 'Risotto']. No keys available. 
// console.log(ordersSet.size); //3 . Different from length because it counts the unique values.
// console.log(ordersSet.has('Pizza')); //True //Similar to the includes method. Sees if it Pizza is in the set.
// console.log(ordersSet.has('Bread')); //False.
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');//Ignore the second addition
// console.log(ordersSet); // Set(4) [ "Pasta", "Pizza", "Risotto", "Garlic Bread" ]
// ordersSet.delete('Risotto');//Removes it from the set
// console.log(ordersSet); //Set(3) [ "Pasta", "Pizza", "Garlic Bread" ]
// // ordersSet.clear(); //Remove all items from the set

// for (const order of ordersSet) console.log(order); 
// //Pasta
// //Pizza
// //Garlic

// //Example of removing duplicates
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
// // const staffUnique = new Set(staff); //Creates a set
// const staffUnique = [...new Set(staff)] //Conversion to an array. Spread operator works on all iterables, including sets.
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); //To know the size of the set
// console.log(new Set('Jonas')); //Set(5) [ "J", "o", "n", "a", "s" ]
// console.log(new Set('Jonas').size); //5

// //Data Structure: Maps (ES6). More useful than sets.
// //A data structure that we can use to map values to keys. The keys can be any data type whereas in objects it is always strings. It is also iterable.

// const rest = new Map();
// rest.set('name', 'classico italiano'); //String property
// rest.set(1, 'Firenze, Italy')//Number property
// rest.set(2, 'Lisbon, Portugal')
// console.log(rest); //Map(3) { name → "classico italiano", 1 → "Firenze, Italy", 2 → "Lisbon, Portugal" }

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(')
// console.log(rest);
// // Map(8) { name → "classico italiano", 1 → "Firenze, Italy", 2 → "Lisbon, Portugal", categories → (4) […], open → 11, close → 23, true → "We are open :D", false → "We are closed :(" }
// // ​
// // size: 8
// // ​
// // <entries>
// // ​​
// // 0: name → "classico italiano"
// // ​​
// // 1: 1 → "Firenze, Italy"
// // ​​
// // 2: 2 → "Lisbon, Portugal"
// // ​​
// // 3: categories → Array(4) [ "Italian", "Pizzeria", "Vegetarian", … ]
// // ​​
// // 4: open → 11
// // ​​
// // 5: close → 23
// // ​​
// // 6: true → "We are open :D"
// // ​​
// // 7: false → "We are closed :("

// console.log(rest.get('name')); //classico italiano
// console.log(rest.get(true)); //We are open :D
// console.log(rest.get(2)); //Lisbon, Portugal

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));  //Is the time between 11 and 23?.//Since the return will be true it will log We are open :D.

// console.log(rest.has('categories'));//true. Checks to see if categories exists as a key.
// rest.delete(2);//removes key 2 which is Lisbon Portugal
// // console.log(rest.clear()); //removes all values
// console.log(rest.size);//7 //Checks to see the size of the map


// // rest.set([1, 2], 'Test'); //adding array as a key. This is in object in memory.
// // console.log(rest);
// // console.log(rest.get([1, 2])); //gives undefined because [1,2] are not the same object in the heap. This one is not in object in memory.

// //To make it work
// const arrMap = [1, 2]
// rest.set(arrMap, 'Test');
// console.log(rest);
// console.log(rest.get(arrMap)); //Test

// //Object as a key
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest);


// //Map Iteration
// const question = new Map([ //Same as the set method but much faster
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'], 
//   [2, 'Java'], 
//   [3, 'JavaScript'], 
//   ['correct', 3], 
//   [true, 'Correct 🎉'], 
//   [false, 'Try again!'],
// ]);
// console.log(question);

// console.log(Object.entries(openingHours1));//Similar to this (array of arrays)
// const hoursMap = new Map(Object.entries(openingHours1))//conversion into a map
// console.log(hoursMap);

// //Quiz App
// console.log(question.get('question'));//What is the best programming language in the world?
// for (const [key, value] of question) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your Answer')); //conversion into a number
// const answer = 3; //To avoid the pop up message, otherwise, activate line 1586
// console.log(answer); 

// console.log(question.get(question.get('correct') === answer));
// //question.get('correct') : is 3
// //=== answer : This is comparing it to the answer
// //Therefore question.get('correct') === answer , if the answer is 3, the value will be true
// //Next is plugging in the answer to the map again
// //Therefore when the condition is true, it will search via .get for 'true', which will return Correct 🎉, if it is false it will return Try again!

// //Convert map to array
// console.log([...question]); 
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]); 
// console.log(...question.values()); //Without [], it will just be the values. What is the best programming language in the world? C Java JavaScript 3 Correct 🎉 Try again!


// //Object.entries is a way to convert an object into an iterable

// //String Methods
// //Strings are also zero based similar to arrays.
// //indexOf(), lastIndexOf(), slice() methods

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); //A
// console.log(plane[1]); //3
// console.log('B737'[0]);//B
// console.log(airline.length); //16
// console.log('B737'.length);//5

// //index of is the first occurrence
// console.log(airline.indexOf('r')); //6 //Position 6

// //lastIndexOf is the last occurrence
// console.log(airline.lastIndexOf('r')); //10 // r in the word portugal. The space counts as a character.
// console.log(airline.indexOf('Portugal')); //8. It is also character sensitive.

// console.log(airline.slice(4)); //Air Portugal - Cuts TAP plus the space //This is called a sub string. It doesnt cut the original string. It is impossible to mutate strings because they are primitive.

// console.log(airline.slice(4, 7)); //Air Position 7- Position 4 = 3 = Air. End - Beginning.

// console.log(airline.slice(0, airline.indexOf(' '))); //TAP
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal
// console.log(airline.slice(-2));//al
// console.log(airline.slice(1, -1)); //starts from 1 and removes the last character = AP Air Portuga

// const checkMiddleSeat = function(seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat'); else console.log('You got lucky 😎');
// }
// checkMiddleSeat('11B')//Middle seat
// checkMiddleSeat('23C')//Lucky
// checkMiddleSeat('3E')//Middle seat

// //Boxing: Takes string to an object.
// console.log(new String('jonas'));//string object - What JS does behind the scenes whenever a method is called on a string. Whenever the operation is done, the object is converted back to a regular string primitive. All string methods return primitives even if called on a string object. 
// console.log(typeof new String('jonas')); //object
// console.log(typeof new String('jonas').slice(1)); //string

// //Conversion - toLowerCase(), toUpperCase()
// console.log('YOUSEF'.toLowerCase()); //yousef
// console.log(airline.toLowerCase()); //tap air portugal
// console.log(airline.toUpperCase());//TAP AIR PORTUGAL

// //Fix Capitalization in name
// const passenger = 'jOnAS'; //Should be Jonas
// const passengerLower = passenger.toLowerCase(); //jonas
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); //Jonas

// //Comparing emails
// //trim(), replace(), replaceAll()
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); //removes the white space (beginning and end)
// console.log(trimmedEmail); //hello@jonas.io

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail); //same as 1666 - hello@jonas.io
// console.log(email === normalizedEmail); //true

// //Replacing parts of a string
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.'); //Only first instance replacement
// console.log(priceUS); //288.97$
// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door','gate'));//Replaces all 

// console.log(announcement.replaceAll(/door/g, 'gate')); //Regular expression. g stands for global

// //Booleans
// //includes(), startsWith(), endsWith()
// const plane2 = 'Airbus A320neo';
// console.log(plane2.includes('A320')); //True
// console.log(plane2.includes('Boeing'));//False
// console.log(plane2.startsWith('Airb')); //True

// if(plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
//   //Both conditions true so : Part of the NEW Airbus Family
//   console.log('Part of the NEW Airbus Family');
// };

// //Practice exercise

// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase(); //To simplify under one standard for the condition
//   if(baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// }
// checkBaggage('I have a laptop, some food and a pocket Knife')
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection')

// //split() and join() string methods
// console.log('A+very+nice+string'.split('+')); //creates an array removing the + and seperating it Array(4) [ "A", "very", "nice", "string" ]
// console.log('Jonas Schmedtmann'.split(' ')); //Array [ "Jonas", "Schmedtmann" ]
// const [firstName2 , lastName2] = 'Jonas Schmedtmann'.split(' ')
// const newName = ['Mr.', firstName2, lastName2.toUpperCase()].join(' '); //joins the array via join between every index
// console.log(newName); //Mr. Jonas SCHMEDTMANN

// const capitalizeName = function(name) {
//   const names = name.split(' '); //Split the string into an array if there is a space between them
//   const namesUpper = []; //Create a new array to put the capitalized version together
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1)); //For every index, the first letter or index [0], convert to uppercase and remove index [1] or the second character. Then we push every index back into the array nameUpper
//     //Alternatively we can do the following to get the same result
//     // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' ')); //Then joins the array into a string by seperating the indexes with a space ' '
// };

// capitalizeName('jessica ann smith davis') //Jessica Ann Smith Davis
// capitalizeName('jonas schmedtmann'); //Jonas Schmedtmann

// //Padding method - padStart(), padEnd()
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+')); //+++++++++++Go to gate 23! //Ensures that the character count is 25 and adds + to fill that gap

// console.log(message.padStart(25, '+').padEnd(30, '+')); //+++++++++++Go to gate 23!+++++ //padEnd will add an additional 5 + since the total count should be 30 characters

// const maskCreditCard = function (number) {
//   const str = number + '' //turns it into a string, the number called in the function in 1740/1741
//   const last = str.slice(-4) //Takes the last 4 characters
//   return last.padStart(str.length, '*'); //For the last 4 characters, make the pad start (total character count) be the length of the input of the credit card and for the remaining characters input * to fill the gap since it is only 4 characters
// }


// // console.log(maskCreditCard(21353253252)); //*******3252
// // console.log(maskCreditCard('21321421513642642'));  //*************2642

// // //Repeat method - repeat()
// // const message2 = 'Bad weather... All departures Delay...';
// // console.log(message2.repeat(5)); //repeats 5 times
// // //Bad weather... All departures Delay...Bad weather... All departures Delay...Bad weather... All departures Delay...Bad weather... All departures Delay...Bad weather... All departures Delay... script.js:1748:9


// // const planesInLine = function (n) {
// //   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`); //repeat() takes the value 🛩 and repeats it
// // }

// // planesInLine(5); //There are 5 planes in line 🛩🛩🛩🛩🛩 
// // planesInLine(3); //There are 3 planes in line 🛩🛩🛩 
// // planesInLine(12); //There are 12 planes in line 🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩

// // //Refactor 1770
// // const getCode = str => str.slice(0, 3).toUpperCase();

// // //String Method Exercise
// // //Transform flights into line 1768-1771
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // for (const flight of flights.split('+')) {
// //   const [type, from, to, time] = flight.split(';');
// //   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${from.slice(0,3).toUpperCase()} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(40)
// //   console.log(output);
// // }

// //Final result:
//   //// 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// //Default parameters

// const reservations = []

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) { //ES6 is putting the default directly
//   //ES5 way
//   // numPassengers = numPassengers || 1; //Creating a default value if the first value is falsy
//   // price = price || 199; //Default value
//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log(booking);
//   reservations.push(booking) //Push the object into the array bookings
// }

// createBooking('LH123');
// console.log(reservations);
// createBooking('LH123', 2, 800); //overwrites default values
// createBooking('LH123', 3); //updates only the first two parameters
// createBooking('LH123', undefined, 2) //undefined refers to the default value or simply undefined

// //Passing Arguments into Functions
// const flight = 'LH234';
// const yousef = {
//   name: 'Yousef Salih',
//   passport: 21511631
// }

// const checkIn = function(flightNum, passenger) {
//   flightNum = 'LH999'//Not good practice to change the parameter name
//   passenger.name = 'Mr. ' + passenger.name;

//   if(passenger.passport === 21511631) {
//     alert('Check In')
//   } else {
//     alert('Wrong passport!')
//   }
// }

// checkIn(flight, yousef);
// console.log(flight); //LH234
// console.log(yousef); //Object with updated name //Object { name: "Mr. Yousef Salih", passport: 21511631 }

// //Is the same as doing
// // const flightNum = flight; //Passing a primitive type to a function is the same as creating a copy outside of the function
// // const passenger = yousef; //same object in the memory heap (reference)

// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(yousef);
// checkIn(flight, yousef) //wrong passport alert

// //JavaScript does not have passing by reference. Only passing by value. The reference itself is still a value. Its simply a value that contains a memory address. So we pass a reference to the function but we do not pass by a reference. 

// //First-Class Vs. Higher-Order Functions

// //First-Class Functions:
// //JavaScript treats functions as first-class citizens
// //This means that functions are simply values
// //Functions are just another "type" of object. Objects and functions are values. Because they are values, we can store them in variables or properties and we can pass them as arguments in other functions (such as an event listener). We can return functions from other functions. Functions are objects and they come with their own methods.

// //Higher-Order functions
// //A function that receives another function as an argument that returns a new function or both
// //This is only possible because of first class functions
// //Ex: AddEventListener() is a higher-order function that receives a callback function
// //Function that returns a new function:
// function count() { //Higher-order function
//   let counter = 0;
//   return function() { //Returned Function
//     counter++;
//   };
// };

// //Lower-order function (Lower level of abstraction) in this context
// const oneWord = function(str){
//   return str.replace(/ /g, '').toLowerCase() //removes the space and replaces it with nothing and then makes it into lower case
// }

// //Lower-order function (Lower level of abstraction) in this context
// const upperFirstWord = function(str) {
//   const [first, ...others] = str.split(' '); //Convert into an array by splitting the values through the space that exists
//   return [first.toUpperCase(), ...others].join(' '); //Make the first index uppercase and join the remaining using a space
// };


// //Higher-order function (higher level of abstraction) because it takes fn (call back function) as an argument.
// const transformer = function(str, fn) {
//   console.log(`Original string: ${str}`); //Original string: JavaScript is the best!
//   console.log(`Transformed string: ${fn(str)}`); //Transformed string: JAVASCRIPT is the best! . The function is called within the higher-order function and takes the same value 'str', which is the argument passed in line 1874.
//   console.log(`Transformed by: ${fn.name}`); //Transformed by: upperFirstWord. This is the name of the function by functions have both methods and properties.
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord); //Transformed string: javascriptisthebest! 

// const high5 = function(){
//   console.log('👋');
// };


// //JavaScript uses callbacks all the time: Reusable, abstraction
// //Abstraction: Hiding the detail of some code implementation becuase we do not care about all the details in the context of where it is applied. It allows us to think about problems at a higher more abstract level. Ex: Transformer does not care about how upperFirstWord and oneWord function work.
// document.body.addEventListener('click', high5); //When the body (page) gets clicked, high5 is called which will console log the emoji

// ['Jonas', 'Martha', 'Adam'].forEach(high5); //Because there are 3 elements in the array, each will receive a high5 //👋 3 script.js:1878:11

// //Functions returning another function (Important in functional programming paradigm)

// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greeterHey = greet('Hey'); //Our first function 'greet' returns a NEW function that we stored in 'greeterHey' variable. This is due to a mechanism called closure.
// greeterHey('Jonas'); //Then we can call it//Hey Jonas
// greeterHey('Steven'); //Hey Steven

// greet('Hello')('Jonas') //Hello Jonas. Why? Because after the first argument is passed ('Hello'), it becomes the returned function which now 'Jonas' is passed to so it console logs 'Hello Jonas'.

// //Using an arrow function instead for the above
// const greetArr = greeting => name => console.log(`${greeting} ${name}`)
// greetArr('Hi')('Yousef')

// //Call Method

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name}) //flight: "LH239 // ​name: "Yousef Salih" in the bookings array for the first iteration

//   },
// }

// lufthansa.book(239, 'Yousef Salih');
// lufthansa.book(635, 'Jonas Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// }

// const bookGlobal = lufthansa.book; //
// // book(23, 'Sarah Williams') //In a regular function, the this keyword points to undefined. This keyword depends on how the function is actually called. 

// bookGlobal.call(eurowings, 23, 'Sarah Williams') //In the first argument, we want the this keyword to point to it. We called the call method which then calls the book function with the this keyword set to Eurowings. The rest of the arguments are for the book function.
// console.log(eurowings);

// bookGlobal.call(lufthansa, 239, 'Mary Cooper') //adds Mary cooper to the bookings array in the object
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: []
// }

// bookGlobal.call(swiss, 583, 'James Bond')
// console.log(swiss);

// //Apply Method - same as call method except that it doesn't receive a list of arguments after the this keyword (first argument) but instead it takes an array of the arguments

// const flightData = [583, 'George Seg'];
// bookGlobal.apply(swiss, flightData) //Not used much in modern javascript
// console.log(swiss);

// bookGlobal.call(swiss, ...flightData) //Modern Javascript version of line 1952

// //Bind Method - Creates a new function
// const bookEW = bookGlobal.bind(eurowings);
// const bookLH = bookGlobal.bind(lufthansa); 
// const bookLX = bookGlobal.bind(swiss); 
// bookEW(64, 'Steve Jobs') //Does not need call or bind because the this keyword already exists

// const bookEW23 = bookGlobal.bind(eurowings, 23); //23 is already passed in the flight number. This is called partial application.
// bookEW23('Yousef Salih') //This will automatically assign it to the name instead. Yousef Salih booked a seat on Eurowings flight EW 23
// bookEW23('Marha Cooper');//Marha Cooper booked a seat on Eurowings flight EW 23 

// //With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//   console.log(this);

//   this.planes++ //+1
//   console.log(this.planes);
// }
// // lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))//In an event listener, the this keyword always points to the element in which that handler is attached to. In this case the button - document.querySelector('.buy').

// //Partial Application - the order of the argument matters. Therefore, if we want to set the value as fixed, then we need to place that first instead of the rate.
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1,200));//220

// const addVAT = addTax.bind(null, 0.23)
// // const addVAT = value => value + value * 0.23; This equivalent to the above code 1983
// console.log(addVAT(100)); //123 because 100 + 100*0.23 (23) = 123
// console.log(addVAT(23));//28.29

// const addTaxRate = function(rate) {
//   return function(value) {
//     return value + value * rate;
//   }
// }

// const addVAT2 = addTaxRate(0.23)
// console.log(addVAT2(100)); //123
// console.log(addVAT2(23)); //28.29


// //Immediately Invoked Function Expressions (IIFE): A function called once only and then it dissapears. Useful in async/await.

// (function() { //This is a function value which mimics a function expression
//   console.log('This will never run again');
//   const isPrivate = 23; //This private or data that is encapsulated (inside the function scope). It is not accessed by the global scope.
// })();//Then we immediately call the function

// (() => console.log('This will also never run again'))(); //Arrow function IIFE

// { //To create a scope for data privacy, in modern JS we can just create a block which protects const and let variables from being accessed. For this reason, IIFE are not as useful. It is good just for executing a function once. 
//   const isPrivate = 23;
//   let isPrivateToo = 22;
//   var notPrivate = 46;
// }

// // console.log(isPrivateToo); //Not defined
// console.log(notPrivate); //46

// //Closures
// //It happens automatically not explicitly
// //Example 1
// const secureBooking = function() {
//   let passengerCount = 0;
//   return function() { //booker function
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   }
// }

// const booker = secureBooking(); //Booker is the return function that takes note of the first initial values of the secureBooking function but afterwards begins executing on its own. This is due to closure. Booker function is in the global environment/scope. It is the environment in which function was created.
// booker(); //1 passengers
// booker(); //2 passengers
// booker(); //3 passengers

// // console.dir(booker); //Shows the secureBooking variable closure

// //Example 2
// let u;
// const v = function() {
//   const a = 23;
//   u = function() {//U function really does close over any variables of the execution context in which it was defined. Even when the variable itself 2035 not defined in the variable environment of the v function. a variable is inside the f function.
//     console.log(a * 2);//46
//   };
// };

// const e = function() {
//   const b = 777;
//   u = function () {
//     console.log(b * 2);
//   }
// }

// v(); //Assigns the global u variable with the u function. 
// u(); //Updates the console to 46. It now has access to the a variable and keeps it. 
// e(); //Re-assigning the u function
// u(); //1554. Closed over the variable environment of e function. This is how it can access the b variable. No longer access to the v function.

// console.dir(u);

// //Example 3:
// const boardPassengers = function(n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function(){
//     console.log(`We are now boarding all ${n} passengers`); //Gets executed after 3 seconds
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);// After 3 seconds
//   }, wait * 1000); //1000 milliseconds = 1 second
//   console.log(`Will start boarding in ${wait} seconds`); //#1 gets executed first
// }

// const perGroup = 1000; //Due to closure, it will ignore this value and close over the perGroup variable in the boardPassengers function and use that instead.
// boardPassengers(180, 3);

//Array Methods

let arr3 = ['a', 'b', 'c', 'd', 'e'];

//Slice Method: Extract part of array without affecting original array
console.log(arr3.slice(2)); //From index 2 until the end
console.log(arr3.slice(2, 4)); //index 2 and 3
console.log(arr3.slice(-1)); //Last element of array

arr3.slice() //is the same as [...arr]

//Splice Method: Similar to slice but mutates the original array by removing the value inputted
console.log(arr3.splice(-1));//Removes the last index
console.log(arr3.splice(1, 2));//Removes index 1 and the second element is the number of elements that is desired to be deleted

//Reverse Method: Reverses the array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse();
console.log(arr2); //Mutates original array

//Concat Method:

const letters1 = arr3.concat(arr2) //Combines 2 arrays but does not affect original arrays
console.log(letters1);
console.log([...arr3, ...arr2]); //Similar to concat method

//Join Method:
console.log(letters1.join('-')); //Makes it into a string and combined by -

//At Method (ES2022): New alternative to the bracket notation for arrays and strings.

const arr1 = [23, 11, 64]
console.log(arr1[0]); //23
console.log(arr1.at(0)); //23
console.log(arr1[arr1.length - 1]); //64. To get the last position of the array.
console.log(arr1.slice(-1)[0]); //64 Alternative way
console.log(arr1.at(-1));//64//New way to achieve the same as above.
console.log('jonas'.at(0)); //j . It also works on strings.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  //To access the counter variable
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); //.abs() removes the negative sign and returns the absolute value
  }
}

//Previous way of going through the array
// for (const movement of movements) {
//     if (movement > 0) {
//       console.log(`You deposited ${movement}`);
//     } else {
//       console.log(`You withdrew ${Math.abs(movement)}`); //.abs() removes the negative sign and returns the absolute value
//     }
//   };

//Alternatively use a forEach() method: Higher-order function. It passes the value, index, and array. The order matters. Continue and break statements do not work in a forEach loop. Therefore, you can't break out of the loop.
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); //.abs() removes the negative sign and returns the absolute value
  }
  console.log(array); //movements array
});

//ForEach() Method on Map and sets. The parameter starts with the value, key, map similar to an array.

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set: Same as map and array except the second parameter is the same parameter as the first. This is because the developers did not want confusion between the different data structures.
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${_}`); //First iteration example : USD: USD. 
});

//Data Transformations with Map, Filter, and Reduce in Arrays

//Map Method
//Similar to ForEach method, except that it creates a new array by looping over the original array. ForEach method creates side effects whereas map methods return values.

const eurToUsd = 1.1;
const movementsUSD = movements.map(function(mov) { //This is more aligned with functional programming
  return mov * eurToUsd;
});

// const movementsUSD = movements.map(mov => mov * eurToUsd); //Same as above using arrow function

console.log(movementsUSD); //new array with updated values
console.log(movements); // does not affect original array

//Same as above using a for of loop
const movementUSDFor = []
for (const mov of movements) {
  movementUSDFor.push(mov * eurToUsd)
};
console.log(movementUSDFor);

//It is the map method that calls the callback function for each array element in the movements array. 
const movementsDescriptions = movements.map((mov, i) => {
  //Using a ternary operator
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
  //Using an if else statement
  // if (mov > 0) {
  //   return `Movement ${i + 1}: You desposited ${mov}`; //Always use a return in a map method
  // } else {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
})

console.log(movementsDescriptions);


//Filter Method: Filter returns a new array containing the array elements that passed a specified test condition.

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits); //New array that removes the negative values

//Using a for of loop
const depositsForOf = [];
  for (const mov of movements) {
  mov > 0 ? depositsForOf.push(mov) : null
}

console.log(depositsForOf); //Removes the negative values

const withdrawals = movements.filter(function (mov) {
  return mov < 0
})

console.log(withdrawals); //Only negative values

//A big advantage to using a method vs a for of loop is for chaining methods.

//Reduce Method: Reduces (boils down) all array elements down to one single value (e.g adding all elements together). We need an accumulator variable (acc) + current iteration in the array. Therefore the array no longer exists and it will return one value.

const balance = movements.reduce(function(acc, cur, i){ //Reduce method takes an accumulator(acc) --> like a snowball or sum. current value =cur.
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur
}, 0) //Takes a second argument or parameter which is the initial value of the accumulator
console.log(balance); //3840

//Using a for of loop
let sum = 0;

for (const mov of movements) {
  sum+= mov
  console.log(sum);
}

console.log(sum);//3840

//Maximum value
const max = movements.reduce((acc, mov) => {
  if(acc > mov)
  return acc;
  else
    return mov
}, movements[0])

console.log(max); //3000

//Chaining Method: We can only chain it is an array
//PIPELINE
//For troubleshooting, use the array and index parameters
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD); //5522

//Find Method: Retrieve element of an array as it loops based on a specified condition. It retrieves the first only unlike the filter method. The filter method returns a new array whereas Find method only returns the element itself.

const firstWithdrawal = movements.find(mov => mov < 0) //If true
console.log(movements);
console.log(firstWithdrawal);//-400


//EQUALITY
console.log(movements.includes(-130)); //.includes method returns a boolean value, in this case true that the value -130 in the movements array exists

//SOME: CONDITION
console.log(movements.some(mov => mov === -130)); //.some() method returns a boolean as well via a condition for ANY of the movements that are TRUE.

//EVERY: Similar to some() except, that EVERY element satisfy the condition
console.log(movements.every(mov => mov > 0));//False because some are negative values even though some of the values are true

//Separate Callback as an argument for the methods
const deposit = mov => mov > 0;
console.log(movements.every(deposit));
console.log(movements.some(deposit));
console.log(movements.filter(deposit));

//Flat and flatMap methods
const arr4 = [[1, 2, 3], [4, 5, 6], 7, 8]
console.log(arr4.flat()); //flatten all the arrays within the array, making it one whole array

const arrDeep = [[[1,2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(3)); //Flat method only goes one level deep, by default puts 1 as the argument. Therefore, putting in 3 will go 3 levels deep.

//Sort Method

//Strings sorting
const owners = ['Yousef', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //Alphabetical A-Z. Works with strings only.
console.log(owners); //Mutates the original array

//Numbers sorting
//Return < 0 A, B (keep order)
//Return > 0 B, A (switch order)
console.log(movements);

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// })

//Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// })

//Ascending alternative
movements.sort((a, b) => {
  return a-b;
});

//Descending alternative
movements.sort((a, b) => {
  return b-a;
});

console.log(movements);

//Array constructor. Creating an array programmatically.
const x = new Array(7); //creates 7 empty slots
console.log(x);
x.map(() => 5) //This will not work

//We can use the fill method
x.fill(1,1) //first value will fill up the value wanted. The second value is the start point at which the value will be inserted. 
console.log(x); //Array(7) [ <1 empty slot>, 1, 1, 1, 1, 1, 1 ]

const arr5 = [123, 315, 46, 4266, 42, 6426, 426];
arr5.fill(11, 2, 5)//Starting from index 2-4 and then continues as per the array above
console.log(arr5); //Array(7) [ 123, 315, 11, 11, 11, 6426, 426 ]

//Array.from. Array is a function and from is a method.
const y = Array.from({length: 7}, () => 1); //In each iteration it will return a 1
console.log(y); //Array(7) [ 1, 1, 1, 1, 1, 1, 1 ]
const z = Array.from({length: 7}, (_, i) => i + 1) //i is the index for each iteration
console.log(z); //Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]

//Exercise: Combine methods of strings and arrays. We want to make sentences capitalized except for a few words.

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1)


  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitalize(word)
  ).join(' ')
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title')); //This Is a Nice Title
console.log(convertTitleCase('and here is another title with an EXAMPLE')); //And Here Is Another Title with an Example


//Numbers: All numbers are represented internally as floating point numbers (always as decimals). One data type for all numbers. They are reperesented internally in a 64 base 2 format, which means numbers are always stored in a binary format (only composed of 0's and 1's). Base 10 = 0 to 9, whereas binary base 2 is 0 and 1. Some numbers that are fractional like 0.1 is difficult to represent in jS. 
console.log(0.1 + 0.2);//0.30000004
console.log(0.1 + 0.2 === 0.3);//false

console.log(23 === 23.0);//true

//Conversion
console.log(Number('23'));//Convert to number
console.log(+'23');//Easier

//Parsing
console.log(Number.parseInt('30px', 10));//Try to figure out the number in the string, it must start with a number//30
console.log(Number.parseInt('e23'));//will not work NaN because it doesnt start with the number

console.log(Number.parseInt('    2.5rem'));//2//Stops at decimal point
console.log(Number.parseFloat('   2.5rem'));//2.5

//Check if value is NaN - Not a Number
console.log(Number.isNaN(20));//false, it is a number
console.log(Number.isNaN('20'));//False
console.log(Number.isNaN(+'20'));//True NaN

//Checking if value is number (Best way, a real number not a string)
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20')); //true
console.log(Number.isFinite(23 / 0)); //Infinity//false because not finite

//Math and Rounding. Math namespace object.
console.log(Math.sqrt(25));//5
console.log(25 ** (1 / 2));//5
console.log(8 ** (1 / 3));//2
console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23 - does type coercion
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN
console.log(Math.min(5, 18, '23', 11, 2));///2
console.log(Math.PI * Number.parseFloat('10px') ** 2);//PI is 3.14159...//radius is 10px  = This will calculate the area with a 10px radius circle =314.159265.
console.log(Math.trunc(Math.random() * 6) + 1); //random is between 0 and 1, trunc makes it no decimals and 6 + 1 is betwen 0 and 6.

//Random number between numbers
const randomInt = (min, max) => Math.trunc(Math.random () * (max - min) + 1) + min;
///Between 0 and 1 multiplied by (max - min) ---> then min to(max - min + min (which is max). This is the range between min-max value
console.log(randomInt(10,20)); //Random number between 10 and 20

//Rounding integers
console.log(Math.trunc(23.3));//23 //removes decimal
console.log(Math.trunc(23.9));//23
console.log(Math.round(23.3));//23 //rounds up or down
console.log(Math.round(23.9));//24
console.log(Math.floor(23.3));//23 always rounded down
console.log(Math.floor(23.9));//23
console.log(Math.ceil(23.3));//24 always rounded up
console.log(Math.ceil('23.9'));//24 also does type coercion for these methods
console.log(Math.trunc(-23.3));//-23
console.log(Math.floor(-23.3));//-24 //Better than trunc because it actually takes in the decimal too as a factor

//Rounding decimals
console.log((2.7).toFixed(3)); //toFixed always returns a string and not a number //2.700
console.log(+(2.7).toFixed(0)); //toFixed always returns a string and not a number //3 //Now with + converted to a number//3

//Process: Number is a primitive and primitives dont have methods so behind the scenes JavaScript will do boxing, which is transforming into a number object then call the method on that object and once the operation is finished it will convert it back to a primitive.

//Remainder Operator
console.log(5 % 2); //1
console.log(5 / 2);//2.5 //5= 2 + 2 + 1
console.log(8 % 3); //2
console.log(8 / 3); //2.666
console.log(6 % 2); //0 because it is divisible by 2 because 6 is an even number
console.log(7 / 2); //3.5

const isEven = n => n % 2 === 0;
console.log(isEven(8)); //true
console.log(isEven(23)); //false

//Numeric Seperators: //Underscores can only be placed between numbers, not at the beginning or end either or made beside eachother repeatedly. It should only be used in the code and not in methods like Number() or parseInt() or for parsing.
const diameter = 287_460_000_000;
console.log(diameter);//287460000000
const priceCents = 345_99;
console.log(priceCents);//34599

const transferFee1 = 15_00;
const transferFee2 = 15_00;
console.log(transferFee1); //1500
console.log(transferFee2);//1500

const PI = 3.14_15 
console.log(PI); //3.1415

console.log(Number('230_000'));//NaN. Does not work. 

//BigInt (ES2020) - Big integers that can store numbers as large as we want
console.log(2 ** 53 - 1);//9007199254740991  //Biggest number JS can represent
console.log(Number.MAX_SAFE_INTEGER);//same as above 9007199254740991
console.log(2 ** 53 + 2);//unsafe numbers
console.log(2 ** 53 + 5);//unsafe numbers
console.log(995435435464373473463543543584395843985943860987908479n);//Now it shows us the actual number 995435435464373473463543543584395843985943860987908479n
console.log(BigInt(95435435));//95435435n - Not good for huge numbers but just transforms it to a big int number type

//Operations
console.log(10000n + 10000n);//20000n
console.log(21591059013950n * 21312521531513n); //460159910122977217631606350n
const huge = 23151632632062n;
const normalNum = 23;
// console.log(huge * normalNum);//error because BigInt numbers cannot be mixed with a regular number. So it needs to be converted first
console.log(huge * BigInt(normalNum));//532487550537426n

//Exceptions to mixing types
console.log(20n > 15);//true
console.log(20n === 20);//false
console.log(20n == 20);//true
console.log(huge + ' is REALLY big!!!'); //string concat //23151632632062 is REALLY big!!!

//Divisions
console.log(10n / 3n); //3n because it is an integer, which returns the closest number
console.log(20n / 3n); //4n because it is an integer, which returns the closest number
console.log(10 / 3 ); //3.3333333333333335