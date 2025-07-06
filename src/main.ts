// TypeScript is a Strongly Typed Language.
// TypeScript is a Statically Typed Language... This means types are checked at compile time. 
// While Javascript is a Dynamically Typed Language. This means types are checked at run time

// TypeScript Benefits include: 
//  1. Self-documenting
//  2. Catch errors in Development
//  3. Great fpr Teams 

let myName: string;
myName = "Omoshola E";
console.log(myName)

let a: number = 10;
let b: number = 2;
let c: number = 5;

console.log(a / b)

console.log(a * c)


let age: number;
let isMarried: boolean;

age = 20;
isMarried = false
console.log({age, isMarried})

// Typescript (any) type; 
let album: any;
// the any type in typescript will someway defeat typescript, because it will allow any type of value. 
album = 'Kai';
album = 45;
album = true;
// It actually defeat Typescript, but that doesn't mean it's bad, because in some cases, you may need to use the any type. or when you're not sure of the type of data you'll be receiving, but just know that any time does exist and you do not want to use it all the time because you'll be defeating the purpose of TypeScript, but some specific time, you'll need to use the any type. 

//function parameter in Typescript

// const sum = (a, b) => { //a and b are assigned type (any) by default if no type is given to them  
//   return a + b; // return any
// };

const sum = (a: number, b: number) => {
    return a + b // return number
}

console.log(sum(5, 10))

//TypeScript Union Type
// this let TypeScript to know that a variable hold a type between the declared types, and either one is Okay. 
let union: number | string; // union hold a value between number and string
union = 100;
union = 'Union' 
// Typescript is good with the above two declaration 
// union = true; // this will throw an error because the type boolean is not declared with union variable. 

let postId: number | string;
let isActive: number | boolean;

let re: RegExp = /\w+/g;

// Arrays in TypeScript 
let stringArr = ['Good', 'Morning', 'Omoshola'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedArr = ['EVH', 1984, true]

// By default TypeScript will inferred the array variable based on the type of value in it. 
// stringArr by default will have a string[] type
// guitars by default will have a (string | number)[] type
// mixedArr by default will have a (string | number | boolean)[] type

// stringArr[0] = 23; // this will throw an error because the type of stringArr is string[]

guitars[2] = 'Ovation';

// guitars.push(true); // this will throw an error because the type of guitars is (string | number)[]

let anyArr = [] // an empty array will be inferred as the type of (any);

let newArr: string[] = [] // giving an empty array a specific type 
newArr.push('string')
console.log(newArr)

let anotherArr: (string | number)[] = []; // declaring an empty array with multiple types
anotherArr.unshift(24);
anotherArr.push('Learning')
anotherArr

let obj = {
    name: 'Omoshola'
}

// TypeScript Tuple
// The length of the Array or the order of types in the array doesn't matter to Typescript, it just knows was types belong in the array, however, if you want to be more strict in defining something that is locked in to a type in a specific element position, and a specific length of an array, what you really want to create is called a Tuple.
let myTuple: [string, number, boolean] = ['user', 24, true]; // this is a tuple(strict array value) and monitored array length.

let mixed = ['user', 24, true] // this will create a union type. which the type of each value is not really a concern to typescript.

mixed = myTuple; // no issue, because myTuple contains the type string, number, boolean which is what is inferred by typescript for mixed variable

//but
// myTuple = mixed // Problem! why? 
// 1. the length of myTuple is been monitored by the number of types declared Explicitly on it, in this case, the variable is expecting the length of 3. while mixed, doesn't have a monitored length. So, Typescript will not allow it because it will see the length of the mixed variable as either lower or higher than myTuple variable which the length is been monitored. 
// 2. myTuple is a type Tuple while mixed is a union type.

// assigning a value of type not explicitly defined in the tuple. 
// myTuple[3] = 42 // Typescript will throw an error, because, only 3 types were defined on the variable, which means, the array value should not be less or more than 3. 

// Objects
// declaring object in typescript
let myObj: object;
myObj = []
console.log(typeof myObj)
myObj = {}

// object with properties
const exampleObj = { // Typescript inferred that exampleObj properties are prop1: string and prop2: boolean by default. 
    prop1: 'Omoshola',
    prop2: true
}

// re-assigning the object props.
// exampleObj.prop1 = 42; // error because the prop1 is a string and we're trying to re-assign a number value. 

// Object Annotating... Explicitly setting the types of properties we want in an object or an object is expected to have. 
// Doing this we use the (type) keyword in Typescript 

type userDetails = {
    name: string,
    age: number,
    email: string, 
    isMarried: boolean,
    hobbies: string[]
}

let user: userDetails = {
    name: 'Omoshola',
    age: 20,
    email: 'user@email.com',
    isMarried: false,
    hobbies: ['Coding', 'Football']
}

console.log(user)

// Note: That we can't add a property or properties that are not inside the userDetails type inside user object. 
// Ex. 
// user.year = 1901; // Error Message: Property "year" does not exist in the userDetails!

// Making an Object Property Optional
type Follower = {
    name?: string,
    age: number,
    isActive?: boolean 
}

const myFollower: Follower = {
    name: 'theOnlyOmoshola',
    age: 4
}


const greetFollower = (follower: Follower) => {
    return `Hello ${follower.name?.toUpperCase}`
}

console.log(greetFollower(myFollower))


//Enums
// Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the Language at runtime.

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

Grade

// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type newUser = {
    name: string,
    age: number,
    album: stringOrNumberArray, // this is a type alias for an array of string or number
}

//Type Alias is possible with Type but it's not possible with Interface.

// interface stringOrBoolean = string | boolean; // this is going to give an error because interface is not a type but a structure.

// Literal Types
let author: 'Omoshola';
// author = 'Shola' // this will throw an error because the author variable is a literal type and can only be assigned the value 'Omoshola'

let usersName: 'Omoshola' | 'Shola' | 'author';
usersName = 'author'; // valid value because author is part of the usersName variable.
// usersName = 'David' // this will throw an error because David is not part of the usersName variable.

// Functions
const add = (a: number, b: number) => { 
    return a + b
}
// TypeScript can infer the return type of a function based on the return statement. And also, we can explicitly set the return type of a function.

const subtract = (a: number, b: number): number => {
    return a - b
}

// Function without a return statement.
const logMgs = (message: any) => {
    console.log(message)
}
// TypeScript can also infer the return type of a function based on the return statement. And also, we can explicitly set the return type of a function.
// The Void Type is a type that represents the absence of a value. It is used to indicate that a function does not return a value.
const logMgs2 = (message: any): void => {
    console.log(message)
}

logMgs2('Hello')
logMgs2(add(2,4));


// function with optional parameters
function addAll (a: number, b: number, c?: number): number {
    // the undefined of the optional parameter must be treated explicitly
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b
}

logMgs2(addAll(10,5))
logMgs2(addAll(10,5,2))


// function with a default parameter
function sumAll (a: number, b: number, c: number = 2): number{
    return a + b + c
}

logMgs2(sumAll(20, 4)) // 26 
// Note: when having a default value, always make sure the value comes last in the listing of parameters or treat explicitly

//function with a default parameter value anywhere is the parameter listing
function sumAllNum(a: number = 10, b: number, c: number = 5, d: number): number {
    return a + b + c + d
} 

logMgs2(sumAllNum(undefined, 10, undefined, 5)) // 30 (10 + 10 + 5 + 5)

// Typescript function with rest (...rest) parameter
function restParam(a: number, ...nums: number[]):number {
    return a + nums.reduce((acc, cur) => acc + cur, 0)
    // notice how we didn't have to specify the type of acc and cur, because typescript will inferred their types from the nums array which is number as specified
}

logMgs2(restParam(10,20,30,40,)) // 100



// Type Assertion
type One = string;
type Two = string | number;
type Three = 'hello';

let m: One = 'hello'
let n = m as Two
n = 'try',
n = 23;

let x = m as Three


let img = document.querySelector('img') as HTMLImageElement;
img.src = ''
