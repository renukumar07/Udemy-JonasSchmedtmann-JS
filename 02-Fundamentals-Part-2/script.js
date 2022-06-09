'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/

function logger() {
  console.log('My name is Jonas');
}

//calling / running / invoking function
logger();
logger();
logger();

function foodProcessor(apple, orange) {
  const juice = `Juice with ${apple} apples and ${orange} orangess`;
  return juice;
}

const appleJuice = foodProcessor(5, 0);
console.log(appleJuice);
console.log(foodProcessor(5, 0));

const appleOrangeJuice = foodProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);
