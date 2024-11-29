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


// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.
let horses;
// Create a variable and use it to store a message visitors to the stable.
let welcomeMessage = "Welcome to denden's stables";
// Create a variable and use it to store the cost of a late payment fee.
let latePayFee;
// Create a variable and use it to store the number of available stalls in the stable.
let availableStalls;

//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.
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


// Store the horses you've just created in your "horses" variable.
horses = [matcha, penguin, knight];

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.
let newHorse = {
    name: "bunny",
    nickname: "bun",
    favTreat: "carrots",
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

horses.push(newHorse);


// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.
matcha.isHungry = true;
penguin.isHungry = false;
knight.isHungry = false;
newHorse.isHungry = true;

console.log(horses);

//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.
// [
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
//   ]

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
availableStalls = 7;
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.
remainingStalls = availableStalls - horses.length;
console.log(remainingStalls);


// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"

if (remainingStalls < 2){
    console.log("We need to build more stalls");
}else{
    console.log(`We have ${remainingStalls} stalls available!`);
}



// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

function latePaidFee (horse){
    latePayFee = 100;
    totalFee = monthlyRent + latePayFee;
    console.log(horses["name"] + totalFee);
}

latePaidFee(horses["monthlyRent"]);

// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

for(let i = 0; i < horses.length ;i++){
    if(horses[i]["favTreat"] != "carrots" ){
        console.log(`${horses[i]["name"]}: what is this??`)
    }else{
        console.log(`${horses[i]["name"]}: YUMM! ${horses[i]["favTreat"]} are my favourite!`)
    }
}

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

function nickName(){
    
}


//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.

// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.

// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.