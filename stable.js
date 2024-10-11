//Lesson 3 - Code
let horseName = "matcha";
//console.log(horseName);
//horseName = "vice ganda"
//console.log(horseName);

let horseAge = 123456;
//console.log(horseAge);

let isHorseInside = true;

// console.log(isHorseInside);
// console.log(typeof 42);
// console.log(typeof horseName);
// console.log(typeof true);

//Lesson 4 - Code
//console.log(fakeVariable);
// const horseName = "mariposa"
let camelCaseExample;
// for variables
const STABLE_MONTHLY_FEE = 234; 
// this value can't be updated 
//console.log(STABLE_MONTHLY_FEE);

//console.log( "The stables monthly fee including tax is: " + STABLE_MONTHLY_FEE * 3);
// uppercase for constant

let horseNickname = "Chacha"
let discount = STABLE_MONTHLY_FEE * 3 * 0.10;

// console.log(`My horse's name is ${horseName} his nickname is ${horseNickname}`);
// console.log(`You will save $${discount} for a 3 month stay.`);



//lesson 5 code

//horseName = "strawberry";

// if (horseAge === 10){
//     console.log("our horse is old");
// } else if(horseAge === 9 ){
//     console.log("our horse is practically ");
// }else{
//     console.log("our horse is still pretty young")
// }


// if (horseName !== "matcha"){
//     console.log(`${horseName} has come to visit the stables`);
// }else{
//     console.log(horseName + " is lonely");
// }

// //lab5a
// if(!isHorseInside){
//     console.log(`${horseName} is outside`);
// }else{
//     console.log(`${horseName} is inside`);
// }

//false is always 0 true is above 0

//Lesson6-Indexs&Arrays code

//indexs
let word = "charisse";
console.log(word.charAt(0));
console.log(word.length);

//arrays
let horseNames = ["strawberry","coffee","milk",horseName];
let horseAges = [10,4,2,horseAge];
let horseLocation = ["inside", "inside", "outside", "outside"];
let areHorsesInside = [true, true, outside, outside];

//console.log(`Welcome to my stables! There are ${horseNames.length} horses staying here. Their names are: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}, ${horseNames[3]}`);
console.log();
horseNames.push("vanilla");
horseNames.splice(2,0,"sugar");

// console.log(horseNames[3]);
// console.log(horseAges[3]);
// console.log(horseLocation[1]);
// console.log(`/Welcome to my stables! There are now ${horseNames.length} horses staying here.`);

//Lab 6
console.log(`Welcome to my stables! There are ${horseNames.length} horses staying here. Their names are: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}, ${horseNames[3]}`);
console.log();
console.log(`${horseNames[0]} is ${horseLocation[0]}`);
console.log(`${horseNames[1]} is ${horseLocation[1]}`);
console.log(`${horseNames[2]} is ${horseLocation[2]}`);
console.log(`${horseNames[3]} is ${horseLocation[3]}`);




