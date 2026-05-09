/*. let js = "amzing";
if (js == "amzing") alert("thankyou for visiting this page!");
20 + 20 + 20 + 20;
console.log(20 + 20 + 20 + 20);
console.log("Tejash");
let firstName = "Tejash";
let first = "hey bro wattsup";
console.log(first);
console.log(firstName);

let tej_bahadur = "RMT";
let $function = 23;
let name = "tej";
console.log(tej_bahadur);
console.log($function);
console.log(name);

let PI = 3.32;
console.log(PI);


let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
javascriptIsFun = 'yes!';
console.log(javascriptIsFun);

let age = 32;
age = 31;
console.log(age);

const ageje = 394 - 321;
const hht = 222 - 22;
console.log(ageje, hht);

const first = 'Tej';
const last = 'bahadur';
console.log(first + ' ' + last);


//Assignment operators
let x = 10 + 5;
x += 10;
x *= 10;
x++;
x--;
console.log(x);



//// CHALLENGES

const MarksMass = 78;
const johnMass = 92;
const MarksHeight = 1.69;
const johnHeight = 1.95;

let BMImark = (MarksMass) / (MarksHeight * MarksHeight);

let BMIjohn = (johnMass) / (johnHeight * johnHeight);

const markHigherBMI = BMImark > BMIjohn;
console.log(BMImark, BMIjohn, markHigherBMI);
if (BMImark > 25) alert("hey Marks  Sorry to tell that you are over weight!!");
if (BMIjohn > 25) alert("hey Marks  Sorry to tell that you are over weight!!");




//String And templete

const firstName = 'tejash';
const job = 'teacher';
const birthYear = 2004;
const year = 2026;
const tejsh = "i  am " + firstName + ', a ' + (year - birthYear) + " old "+ job;
console.log(tejsh);


console.log('string with \n\
    multiple \n\
    lines');
    

const age = 9;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('Tejash can start driving license 🚗 ');
} else {
    console.log('koi na babu hota hai better luck next time 👍🏼');
}



const inputYear = '1992';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);






const inputyr = '2008';
console.log(Number(inputyr), inputyr);
console.log(Number(inputyr) + 19);
console.log(Number('tej'));
console.log(typeof NaN);
console.log('22' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);





console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('tej'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 900;
if (money) {
    console.log('dont spend it all;');
} else {
    console.log('you should get a job :');
}



const age = 18;
if (age === 18) console.log('oh achha : (strict)');

if (age == 18) console.log('you just becme an adult(loose)');

const favourite = prompt("whats your favourite number ?");
console.log(favourite);

if (favourite === 23) {
    console.log('cool 23 is an amazing number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else if (favourite === 2) {
    console.log('2 is also a cool number ')
} else {
    console.log('number. is not 23 or 2 or 9')
}
if (favourite !== 23) console.log('why not 23?');



const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shuldDrive = hasDriversLicense && hasGoodVision;
if (shuldDrive) {
    console.log('tejash is able to drive....');
} else {
    console.log('someone else should drive.....');
}
const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);



challenges 1





const dol1 = 97;
const dol2 = 112;
const dol3 = 101;
const dolAvgg = (dol1 + dol2 + dol3) / 3;
console.log("Average of dolphin is " + dolAvgg);

const koa1 = 109;
const koa2 = 95;
const koa3 = 123;
const koaAvgg = (koa1 + koa2 + koa3) / 3;
console.log("Average o koalas is " + koaAvgg);

if (koaAvgg > dolAvgg) {
    console.log('koalas win the trophy🏆');
} else if (dolAvgg > koaAvgg) {
    console.log('dolphin win the trophy 🏆');
} else if (koaAvgg === dolAvgg) {
    console.log('none of one is win the trophy 🏆 ');
}




/// SWITCH STATEMENT


const day = 'wednesday';
switch (day) {
    case 'monday':
        console.log('plan course structure');
        break;
    case 'tuesday':
        console.log('prepared theroy video');
        break;
    case 'wednesday':
        console.log('go to gaour city mall to see movies in  cenema and enjoy your day ');
        break;
    case 'thursday':
        console.log('record your schedule');
        break;
    case 'friday':
        console.log('heyy buddy enjoy youyr life ');
        break;



}







if (day == 'monday') {
    console.log("colllege");
    
    } else if (day == 'tuesday') {
        console.log("prefer cinema to movies");
        
        } else if (day == 'wednesday') {
            console.log("doing flutter tutorials");
            
            } else if (day == 'thursday') {
                console.log("donig javascript tutorial work on real project");
                
                } else if (day == 'friday') {
                    console.log("practice dsa question on leetcode");
                    
                    } else if (day == 'saturday') {
                        console.log("dsa question leetcode");
                        
                        } else {
                            console.log("enjoy weekend");
                    }
                    






                    //the conditional (ternary operators)
                    
                    
                    // const age = 23;
                    // age >= 18 ? console.log(' I like to drink wine 🍷') :
                    //     console.log('I like to drink water 💦');
                    
                    




if (23 < 32) {
    const str = '23 is less than 32';
}
const me = 'tejbahadur';
console.log(`I'm ${2026 - 2006} years old ${me}`);




//******CONDITIONAL TERNARY  OPERATOR

const age = 15;
//age >= 18 ? console.log('I like to drink wine 🍷') :
// console.log(' I like to drink  water💧');

const drink = age >= 18 ? '🍷wine' : 'water💧';
console.log(drink);

let drink2;
if (age >= 32) {
    drink2 = '🍷wine'
} else {
    drink2 = '💧water  '
}
console.log(drink2);



//challenges #4
    // steven wants to build a very simple tip calculator forwhenever 
    // he goes eating in a restourent . in his country it usualy to tip 15% if the bill value is between 50 and 300 . if the value is different the tip is 20%.
    

const bill = 275;
const tip = (.15 * bill);
const tips = (.2 * bill);

if (bill >= 50 && bill <= 300) {
    console.log('tip is  = ' + tip + '  And bill is = ' + bill + '  Total bill is =' + (tip + bill));

} else {
    console.log('Tip is ' + tips);
}

*/
