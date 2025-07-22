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


// let img = document.querySelector('img') as HTMLImageElement;
// img.src = ''


class Coder {
    name: string;
    age: number;

    constructor(
        name: string, 
        age: number
    ) {
        this.name = name,
        this.age = age
    }
}

const newCoder = new Coder('Omoshola', 34)
console.log(newCoder)


class Coders {
    constructor(
        public readonly name: string,
        protected age: number,
        protected instrument: string,
    ) {
        this.name = name,
        this.age = age,
        this.instrument = instrument
    }

    public getAge() {
        console.log(`I am ${this.age}`)
    }
}

const newCoders = new Coders('John', 34, 'Guitar')
// console.log(newCoders.age)
// console.log(newCoders.instrument)

class Guitarist extends Coders {
    works: string
    constructor(name: string, age: number, instrument: string, works: string) {
        super (name, age, instrument);
        this.works = works
    }

    getGuitarist() {
        console.log(`${this.name} works as a ${this.works} at the age of ${this.age}`)
    }
}

const extClass = new Guitarist('Mark', 54, 'guitar', 'Guitarist')
console.log(extClass)

console.log(extClass.getGuitarist())

///////////////////////////////////////////////
interface Student {
    name: string,
    age: number,
    classes: number[]
}

const steve: Student = {
    name: 'Steve',
    age: 23,
    classes: [100, 200]
}

console.log(steve)


// index signature
type transactions = {
    [index: string]: number
}

type transactionType = {
    sales: number
    expenses: number
}
type transactionsType = Record<string, number>;


const todaysTransaction: transactionsType = {
    sales: 50000,
    expenses: 12000
}

// dynamic keys
for(const transaction in todaysTransaction) {
    console.log(`${transaction}: ${todaysTransaction[transaction]}`)
}

Object.keys(todaysTransaction).map(key => console.log(key))


// Utility Type (Record)
// when you need an object with dynamic keys but consistent value types. An alternative to index signature
type userKey = 'firstName' | 'lastName' | 'age' | 'GPA';

const userObj: Record<userKey, string | number> = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    GPA: 4.15,
}



//Generics
// 

// this will take in an argument of of string and return a string as the output. 
// Note: that stringEcho function can't be used for any other type of data type except the string type. This is what Generics Type solves in Typescript.
const stringEcho = (arg: string): string => arg


// making a function more general
const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    // type checking
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('john'))
console.log(isObj([1,2,3]))
console.log(isObj({name: 'john'}))
console.log(isObj(null))




const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if(Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }
    if(isObj(arg) && Object.keys(arg as keyof T).length) {
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}

console.log(isTrue([1,2,3]))


interface hasID {
    id: number
}

const processUser = <T extends hasID>(user: T): T => {
    return user
}

console.log(processUser({id: 1, name: 'Anonumous'}))
// console.log(processUser({name: 'Anonumous2'}))



const getUserProperties = <T extends hasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

// an object of T that must include an id.   // and object of K that must include the key of object T // arg of T[] key: is taken from T[properties], 
// return of array of value of T at property K 
/**
 * T = {id: number, name: string, age: number, isMarried: boolean}
 * K = {id, name, age, isMarried}
 * 
 */


type Users = {
    name: string,
    id: number,
    email: string,
    phoneNumber: number,
}


const usersDetails: Users[] = [
    {
        name: 'Dave',
        id: 1,
        email: 'dave@gmail.com',
        phoneNumber: 352234255425
    },
    {
        name: 'John',
        id: 2,
        email: 'john123@gmail.com',
        phoneNumber: 245758846838
    }
]

console.log(getUserProperties(usersDetails, 'email'))
console.log(getUserProperties(usersDetails, 'name'))
console.log(getUserProperties(usersDetails, 'phoneNumber'))
console.log(getUserProperties(usersDetails, 'id'))


//Generics Interface

interface Box<T> {
    value: T
}

const stringBox: Box<string> = {value: 'hello'}
const box: Box<number> = {value: 42}




// Contraist (extends)
function getLength<T extends {length: number}> (arg: T): number {
    return arg.length
}

console.log(getLength('hello'))
console.log(getLength([1,2,3,4,5,]))
// console.log(getLength(42))
