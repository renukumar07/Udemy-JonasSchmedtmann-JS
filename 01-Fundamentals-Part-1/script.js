/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = ' JM ';
let $function = 27;

let person = ' jonas ';
let PI = 3.1415;

let myFirstJob = ' Programmer ';
let myCurrentJob = ' Teacher';

let job1 = ' programmer ';
let job2 = ' teacher ';

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
*/

/*
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas, ageSara);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jona';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >,<,>=,<=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas - agesarah) / 2;
console.log(ageJonas, agesarah, averageAge);
*/

/*
//Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �

// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ', a ' + (year - birthYear) + 'years old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n multiple \n lines');
console.log(`String with 
multiple 
lines`);
*/
/*
const age = 15;

if (age >= 18) {
  console.log('Sarah can start her driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/
/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � 
*/

/*
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;

// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);
const markHigherBMI = markBMI > johnBMI;
if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
}
*/

// //Type Conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear); //1991
// console.log(Number(inputYear) + 18); //199118

// console.log(Number('Jonas')); //NaN
// console.log(typeof NaN); //number

// console.log(String(23));

// //type coercion
// console.log('I am' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// //Guess the Output
// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '',undefined, null, NaN

/*
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!'); //else will get executed
}

money = 100;
if (money) {
  console.log("Don't spend it all ;)"); //Executed
} else {
  console.log('You should get a job!');
}

let height;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is undefined');
}
*/

const age = 18;
if (age === 18) console.log('you just became an adult:D(Strict)');

if (age == 18) console.log('you just became an adult:D(loose');

const favourite = prompt("What's your faviourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}

if (favourite !== 23) {
  console.log('why not 23?');
}
