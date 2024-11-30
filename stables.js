// //Lesson 3 - Code
// let horseName = "matcha";
// //console.log(horseName);
// //horseName = "vice ganda"
// //console.log(horseName);

// let horseAge = 123456;
// //console.log(horseAge);

// let isHorseInside = true;

// // console.log(isHorseInside);
// // console.log(typeof 42);
// // console.log(typeof horseName);
// // console.log(typeof true);

// //Lesson 4 - Code
// //console.log(fakeVariable);
// // const horseName = "mariposa"
// let camelCaseExample;
// // for variables
// const STABLE_MONTHLY_FEE = 234; 
// // this value can't be updated 
// //console.log(STABLE_MONTHLY_FEE);

// //console.log( "The stables monthly fee including tax is: " + STABLE_MONTHLY_FEE * 3);
// // uppercase for constant

// let horseNickname = "Chacha"
// let discount = STABLE_MONTHLY_FEE * 3 * 0.10;

// // console.log(`My horse's name is ${horseName} his nickname is ${horseNickname}`);
// // console.log(`You will save $${discount} for a 3 month stay.`);



// //lesson 5 code

// //horseName = "strawberry";

// // if (horseAge === 10){
// //     console.log("our horse is old");
// // } else if(horseAge === 9 ){
// //     console.log("our horse is practically ");
// // }else{
// //     console.log("our horse is still pretty young")
// // }


// // if (horseName !== "matcha"){
// //     console.log(`${horseName} has come to visit the stables`);
// // }else{
// //     console.log(horseName + " is lonely");
// // }

// // //lab5a
// // if(!isHorseInside){
// //     console.log(`${horseName} is outside`);
// // }else{
// //     console.log(`${horseName} is inside`);
// // }

// //false is always 0 true is above 0

// //Lesson6-Indexs&Arrays code

// //indexs
// let word = "charisse";
// console.log(word.charAt(0));
// console.log(word.length);

// //arrays
// let horseNames = ["strawberry","coffee","milk",horseName];
// let horseAges = [10,4,2,horseAge];
// let horseLocation = ["inside", "inside", "outside", "outside"];
// let areHorsesInside = [true, true, false, false];

// //console.log(`Welcome to my stables! There are ${horseNames.length} horses staying here. Their names are: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}, ${horseNames[3]}`);
// console.log();
// horseNames.push("vanilla");
// horseNames.splice(2,0,"sugar");

// // console.log(horseNames[3]);
// // console.log(horseAges[3]);
// // console.log(horseLocation[1]);
// // console.log(`/Welcome to my stables! There are now ${horseNames.length} horses staying here.`);

// //Lab 6
// console.log(`Welcome to my stables! There are ${horseNames.length} horses staying here. Their names are: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}, ${horseNames[3]}`);
// console.log();
// console.log(`${horseNames[0]} is ${horseLocation[0]}`);
// console.log(`${horseNames[1]} is ${horseLocation[1]}`);
// console.log(`${horseNames[2]} is ${horseLocation[2]}`);
// console.log(`${horseNames[3]} is ${horseLocation[3]}`);


// console.log([1,2,3].length);


//lesson 10 - object primitive
//this - can call inside the object function, so no need parameters
// let matcha = {
//     name:"matcha",
//     nickname:"chacha",
//     age: 3,
//     isInside: false,
//     intro(){
//         console.log(`${this.name} is ${this.age} years old`);
//     }
// };

// //adding stuff to variable object can also update data
// console.log(matcha);
// matcha.favSnack = "brownSugar";
// matcha["age"] = 4;
// console.log(matcha);
// matcha.MONTHLY_RENT = 345;

// //adding function inside the variable object

// matcha.rentNotice = function rentNotice(){
//     console.log(`${this.name}'s monthly rent is $${this.MONTHLY_RENT}!`);
// }
// matcha.rentNotice();


// //example
// function nameInfo(horse,key){
//     console.log(`this horse is ${key}d ${horse[key]}`);
// }

// nameInfo(matcha,"nickname");
// nameInfo(matcha,"name");
// matcha.intro();

// console.log();
// console.log("Constructors");
// // constructors
// function Horse(name,nickname,age,favTreat,isInside){
//     this.name = name;
//     this.age = age;
//     this.nickname = nickname;
//     this.favTreat = favTreat;
//     this.isInside = isInside;
//     this.rent = 345;
//     this.intro = function(){
//         console.log(`${this.name} is ${this.age} years old`);
//     }
    
// }

// const matchaa = new Horse("matcha","chacha", 4, "brownSugar", true);
// const cookie = new Horse("cookie","cooCoo", 3, "molk", false);
// const dave = new Horse("dave","david", 14, "hay", true);
// console.log(matchaa);
// console.log(cookie);
// console.log(dave);

// console.log(typeof matchaa);





//------------------- Welcome to Matcha stables! -------------------//

//----------------------------- Bonus -------------------------------//

//             .''                 .''                  .''                   .''      
//   ._.-.___.' (`\      ._.-.___.' (`\       ._.-.___.' (`\        ._.-.___.' (`\
//   //(        ( `'     //(        ( `'      //(        ( `'        //(       ( `'
//   '/ )\ ).__. )     '/ )\   ).__. )        '/ )\ ).__. )         '/ )\ ).__. )  
//   ' <' `\ ._/'\      ' <' `\ ._/'\         ' <' `\ ._/'\         ' <' `\ ._/'\
//    `   \     \        `   \     \           `   \     \           `   \     \
//
 
//------------------------- Seting up shop -------------------------//
let horses;
let welcomeMessage = "Welcome to denden's stables";
let latePayFee;
let availableStalls;

//------------------------- First day -------------------------//
function Horse(name,nickname,favTreat,age,monthlyRent,isInside,color,bloodType){
    this.name = name;
    this.nickname = nickname;
    this.favTreat = favTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isInside = isInside;
    this.color = color;
    this.bloodType = bloodType;
    this.intro = function(){
        console.log(`This is ${this.name}, also known as ${this.nickname}. ${this.name} is ${this.age} years old.`);
    }
    this.rentNotice = function(){
        console.log(`${this.name}'s monthly rent is $${this.monthlyRent}`);
    }
}

const matcha = new Horse("matcha","chacha","sugar",12,250,false,"white","A"); 
const penguin = new Horse("penguin","penpen","eggs",6,200,true,"navy blue","T"); 
const knight = new Horse("knight","moon","charcoal",18,280,true,"black","U"); 

horses = [matcha, penguin, knight];

let bunny = {
    name: "bunny",
    nickname: "bun",
    favTreat: "iceCream",
    age: 11,
    monthlyRent: 300,
    isInside: false,
    color: "white",
    bloodType: "B",
    intro(){
        console.log(`This is ${this.name}, also known as ${this.nickname}. ${this.name} is ${this.age} years old.`);
    },
    rentNotice(){
        console.log(`${this.name}'s monthly rent is $${this.monthlyRent}`);
    }
} 
horses.push(bunny);

matcha.isHungry = true;
penguin.isHungry = false;
knight.isHungry = false;
bunny.isHungry = true;

//------------------------- Stable roster -------------------------//
//     Horse {
//       name: 'matcha',
//       nickname: 'chacha',
//       favTreat: 'sugar',
//       age: 12,
//       monthlyRent: 250,
//       isInside: false,
//       color: 'white',
//       bloodType: 'A',
//       intro: [Function (anonymous)],
//       rentNotice: [Function (anonymous)],
//       isHungry: true
//     },
//     Horse {
//       name: 'penguin',
//       nickname: 'penpen',
//       favTreat: 'eggs',
//       age: 6,
//       monthlyRent: 200,
//       isInside: true,
//       color: 'navy blue',
//       bloodType: 'T',
//       intro: [Function (anonymous)],
//       rentNotice: [Function (anonymous)],
//       isHungry: false
//     },
//     Horse {
//       name: 'knight',
//       nickname: 'moon',
//       favTreat: 'charcoal',
//       age: 18,
//       monthlyRent: 280,
//       isInside: true,
//       color: 'black',
//       bloodType: 'U',
//       intro: [Function (anonymous)],
//       rentNotice: [Function (anonymous)],
//       isHungry: false
//     },
//     {
//       name: 'bunny',
//       nickname: 'bun',
//       favTreat: 'carrots',
//       age: 11,
//       monthlyRent: 300,
//       isInside: false,
//       color: 'white',
//       bloodType: 'B',
//       isHungry: true
//     }
//  

//---------------------- Growing business ----------------------//

availableStalls = 7;
remainingStalls = availableStalls - horses.length;
if (remainingStalls < 2){
    console.log("We need to build more stalls");
}else{
    console.log(`We have ${remainingStalls} stalls available!`);
}

console.log();
function latePaidFee (horse){
    latePayFee = 100;
    for(let i = 0; i < horses.length ;i++){
        lateRent = horses[i]["monthlyRent"] + latePayFee;
        console.log(`${horses[i]["name"]} will owe $${lateRent} if they pay the rent late!`);
    }
}
latePaidFee(horses);

console.log();
for(let i = 0; i < horses.length ;i++){
    if(horses[i]["favTreat"] != "iceCream" ){
        console.log(`${horses[i]["name"]}: what is this??`)
    }else{
        console.log(`${horses[i]["name"]}: ${horses[i]["favTreat"]} YUMMY! ${horses[i]["favTreat"]} good!`)
    }
}

console.log();
function nickName(horseName){
        return horseName["nickname"];
}

console.log( horses[2]["name"] + "'s nickname is "+ nickName(horses[2]));

//------------------------- Day to day operations -------------------------//
console.log();
function uniqueProperty (horses){
    for(let i = 0; i < horses.length ;i++){
        console.log(`${horses[i].name} is ${horses[i].color}`);
    }
}
uniqueProperty(horses);

console.log();
function horsesOutside(horses){
    for (let i = 0; i < horses.length; i++){
        horses[i]["isInside"] = false;
        console.log(`${horses[i].name} has been moved outside to spend time in the sun`);
    }
}

horsesOutside(horses);

horseLocationUpdate = {
    location(){
        if (horses.isInside === true){
        horses.isInside = false;
        }else{
        horses.isInside = false;
        }
    }
}

console.log();
function feedingHorses (horses){
    for (let i = 0; i < horses.length; i++){
        if (horses[i]["isInside"] === false){
            horses[i].isInside = true;
            console.log(`${horses[i].name}! Come inside to have ${horses[i].favTreat}`);
        }
        console.log(`Update: ${horses[i].name} is now eating ${horses[i].favTreat}`);
    }
}
feedingHorses(horses);

console.log();
function horsesBedTime (horses){
    for (let i = 0; i < horses.length; i++){
        if (horses[i]["isInside"] === false){
            horses[i].isInside = true;
            console.log(`${horses[i].name}! come inside its bed time!S`);
        }else{
            console.log(`${horses[i].name} is now ready for bed`);
        }
    }
}
horsesBedTime(horses);
