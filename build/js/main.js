"use strict";
// TypeScript is a Strongly Typed Language.
// TypeScript is a Statically Typed Language... This means types are checked at compile time. 
// While Javascript is a Dynamically Typed Language. This means types are checked at run time
// TypeScript Benefits include: 
//  1. Self-documenting
//  2. Catch errors in Development
//  3. Great fpr Teams 
let myName;
myName = "Omoshola E";
console.log(myName);
let a = 10;
let b = 2;
let c = 5;
console.log(a / b);
console.log(a * c);
let age;
let isMarried;
age = 20;
isMarried = false;
console.log({ age, isMarried });
// Typescript (any) type; 
let album;
// the any type in typescript will someway defeat typescript, because it will allow any type of value. 
album = 'Kai';
album = 45;
album = true;
// It actually defeat Typescript, but that doesn't mean it's bad, because in some cases, you may need to use the any type. or when you're not sure of the type of data you'll be receiving, but just know that any time does exist and you do not want to use it all the time because you'll be defeating the purpose of TypeScript, but some specific time, you'll need to use the any type. 
//function parameter in Typescript
// const sum = (a, b) => { //a and b are assigned type (any) by default if no type is given to them  
//   return a + b; // return any
// };
const sum = (a, b) => {
    return a + b; // return number
};
console.log(sum(5, 10));
//TypeScript Union Type
// this let TypeScript to know that a variable hold a type between the declared types, and either one is Okay. 
let union; // union hold a value between number and string
union = 100;
union = 'Union';
// Typescript is good with the above two declaration 
// union = true; // this will throw an error because the type boolean is not declared with union variable. 
let postId;
let isActive;
let re = /\w+/g;
// Arrays in TypeScript 
let stringArr = ['Good', 'Morning', 'Omoshola'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedArr = ['EVH', 1984, true];
// By default TypeScript will inferred the array variable based on the type of value in it. 
// stringArr by default will have a string[] type
// 
