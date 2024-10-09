//Lesson 3 - Code
let horseName = "matcha";
console.log(horseName);
//horseName = "vice ganda"
console.log(horseName);

let horseAge = 123456;
console.log(horseAge);

let isHorseInside = true;
console.log(isHorseInside);

console.log(typeof 42);

console.log(typeof horseName);
console.log(typeof true);

//Lesson 4 - Code
//console.log(fakeVariable);
// const horseName = "mariposa"
let camelCaseExample;
// for variables
const STABLE_MONTHLY_FEE = 234; 
// this value can't be updated 
console.log(STABLE_MONTHLY_FEE);

console.log( "The stables monthly fee including tax is: " + STABLE_MONTHLY_FEE * 3);
// uppercase for constant

let horseNickname = "Chacha"
let discount = STABLE_MONTHLY_FEE * 3 * 0.10;

console.log(`My horse's name is ${horseName} his nickname is ${horseNickname}`);
console.log(`You will save $${discount} for a 3 month stay.`);



//lesson 5 code

//horseName = "strawberry";

if (horseAge === 10){
    console.log("our horse is old");
} else if(horseAge === 9 ){
    console.log("our horse is practically ");
}else{
    console.log("our horse is still pretty young")
};


if (horseName !== "matcha"){
    console.log(`${horseName} has come to visit the stables`);
}else{
    console.log(horseName + " is lonely");
};

if(!isHorseInside){
    console.log(`${horseName} is outside`);
}else{
    console.log(`${horseName} is inside`);
};

//false is always 0 true is above 0