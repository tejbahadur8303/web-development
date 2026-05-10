/*
//Activating  strict mode
'use strict';
let hasDriverslicense = false;
const passTest = true;
if (passTest) hasDriverslicense = true;
if (hasDriverslicense) console.log('I can drive the car');
const interface = 'Audio';
const private = 534;



////// FUNCTION

function logger() {
    console.log('My name is Tejbahadur ');
}
//calling / runniing / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(3, 4);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);



function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const Age = calcAge1(1991);
console.log(Age);

const calcAge2 = function (birthYear) {
    return 3037 - birthYear;
}
const Age2 = calcAge2(2000);
console.log(Age2);



//ARROW FUNCTION

const calcAge3 = birthYear => 2032 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991, 'Tejbahadur'));


function cutFruitPieces(fruit) {
    return fruit * 4;

};

function fruitProcessor(apples, oranges) {
    const appplePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
};
console.log(fruitProcessor(2, 3));




const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 82 - age;
    return `${firstName} retires in ${retirement} years`;

}
console.log(yearsUntilRetirement(1991, 'jonas'));




//INTRODUCTION TO ARRAY

const frnd1 = 'michael';
const frnd2 = 'peter';
const frnd3 = 'stefen';
const frnd4 = 'parker';
const frnds = ['michaael', 'peter', 'stefen', 'parker'];
console.log(frnds);
console.log(frnd2);
console.log(frnd3.length);
console.log(frnd4);



const frnds = ['Micheal', 'stefen', 'peter'];
//add element
const newfrnd = frnds.push('jay');

console.log(frnds);
console.log(newfrnd);

frnds.unshift('john');
console.log(frnds);

//Remove elements
frnds.pop();
const popped = frnds.pop();
console.log(popped);

frnds.shift();
console.log(frnds);

console.log(frnds.indexOf('jay'));



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * .2;

}
const bills = [125, 55, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = bills + tip;
console.log(bills, tip, totals);


///OBJECTS


const jonasArray = ['jonas',
    'peter',
    'stefen',
    2029 - 1991,
    'teacher',
    ['michael', 'peter', 'stefen']
];
console.log(jonasArray);



const jonas = {
    firstName: 'jonas',
    lastName: 'rai',
    age: 2000 - 1940,
    job: 'teacher',
    frnd: ['michael', 'peter', 'stefen']
}
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedId = prompt('What do you want to know about tejbahadur ? choose between firstName, lastName, age, job and frnd');


if (jonas[interestedId]) {
    console.log(jonas[interestedId]);
} else {
    console.log('wrong request ! choose between firstName,  lastName, age, job, and frnd');
}
jonas.location = 'potugal';
jonas['twitter'] = '@tejash';
console.log(jonas);



const jonas = {
    firstName: 'jonas',
    lastName: 'rai',
    age: 2000 - 1940,
    job: 'teacher',
    frnd: ['michael', 'peter', 'stefen'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2038 - birthYear;
    }
};
console.log(jonas.calcAge(1991));
console.log(jonas['calcAge'](1991));


//challllengge #1


const mark = {
    firstName: 'mark miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};

const john = {
    firstName: 'john Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};
console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(mark.bmi, john.bmi);




// LOOPS

for (let rep = 1; rep <= 100; rep++) {
    console.log(`kaise  ho bro 👊 ${rep} 🚊`);
}




const jonasArray = [
    'jonas',
    'michael',
    2903 - 232,
    'teacher',
    ['michael', 'peter', 'stefen']
];

for (let i = 0; i < 3; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);


    // types.push(typeof jonas[i]);
}
// console.log(types);
// const years =[1991, 2007, 1969,2020];
// const ages =[23,43 ,21,34];


for (let rep = 1; rep <= 5; rep++) {
    if (rep == 2) {

        //continue
        console.log(`aur bhai 💦 ${rep}`);
        continue;
    } else {
        console.log(`kya haal haii  👍🏼${rep}`);
    }
}
    

for (let rep = 1; rep <= 5; rep++) {
    if (rep == 4) {

        //break
        console.log(`aur bhai 💦 ${rep}`);
        break;
    } else {
        console.log(`kya haal haii  👍🏼${rep}`);
    }
}



const tej=['hi','ha','aur','btao','bdiya ba', 'apn'];
for(let i=tej.length-1; i>=0; i--){
    console.log(i,'jii✌️');
}



    

let dice = Math.floor(Math.random()*6)+1;

while(dice !==6){
    console.log(`You rolled a ${dice}`);
    dice =Math.floor(Math.random()*6)+1
    if(dice ===6) console.log('Loop is about to end ....');
}


"use strict";
const x = "23";
if (x === 23) console.log(23);
const calcAge = (birthYear) => 2023 - birthYear;
console.log(calcAge(200));
console.log(calcAge(1992));


///challenge
// we work for a company building the home smart thermometer
//our most recent task is this :
//given an array of temperature of the day, calculate the amlitude of temperature . it might be sensor error?

let arr = [-1, -3, -4, 3, 20, "error", 24, 25, 27, 26];

let max = arr[0];
let min = arr[0];
for (let i = 1; i <= arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(`maximum  is ${max}`);
console.log(`minimum  is ${min}`);

const amplitude = (max - min) / 2;
console.log(`amplitude is ${amplitude}`);


const kelvin = function () {
  const measure = {
    type: "temp",
    unit: "celcius",
    value: Number(prompt("degree")),
  };
  console.log(measure.value);
  console.table(measure);
  const mkelvin = measure.value + 273;
  return mkelvin;
};
console.log(kelvin());
*/
setTimeout(() => console.log("faaah"), 1000);
setTimeout(() => console.log("hello"), 3000);
