/*JavaScript Fundamentals – Part 1
LECTURE: Values and Variables
1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)
2. Logtheirvaluestotheconsole*/

let country = 'Canada';
let continent = 'North America';
let population = '38.01 million'

console.log(country)
console.log(continent)
console.log(population)

//LECTURE: Data Types
// 1. Declareavariablecalled'isIsland'andsetitsvalueaccordingtoyour country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// 2. Logthetypesof'isIsland','population','country'and'language' to the console

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




/* This is a way to comment out code */

/*Best Practices
1) Always use const unless you're sure that the value will change in the future. This will reduce errors from mutating code.
*/