console.log("welcome to variable second class");
// var , let ,const
// way of declaration


//* var
// only declaration
var a;
console.log(a)

// only declaration of variable using var keyword is possible

// only initialization
a = 10;
console.log(a)

// only initialization is possible

var b = 20;
console.log(b)

// both intialization and declaration are possible

var b;
console.log(b)

var b = 30;
console.log(b)

// redeclaration and reintialization are possible


// let key word
// only declaration
let fullName;
console.log(fullName)  // possible

// only intialization
fullName = "tunguru";
console.log(fullName)  //possible

// both 
let abc = 20;
console.log(abc)

// re declaration
// let fullName;   //not possible


//const 
//only declaration
// const age;    //not possible

// only intialization is not possible

// both declaration and intialization

// const age=30;
// console.log(age)

// re intialization is not possible
// age=40;
// console.log(age)


// !hoisting concept   and TDZ (Temporal dead zone)

// {
//     var email="abc@gmail.com"
// }

console.log("first", email)
var email = "bbb@gmail.com";

console.log("second", email)


// primitive data type(stores single data)
//  number 
//  string
//  boolean
// undefined
//  null
//  bigint
// symbole

let tunguruAge = 40;
console.log(tunguruAge)
console.log(typeof tunguruAge)



let tunguruName = "tunguru bholo";
console.log(tunguruName)
console.log(typeof tunguruName)

let isMarried = true;
console.log(isMarried)
console.log(typeof isMarried)

let village = undefined;
console.log(village)
console.log(typeof undefined)

let tunguruHaveMoney = null;
console.log(tunguruHaveMoney);
console.log(typeof tunguruHaveMoney)
console.log(typeof typeof typeof tunguruHaveMoney)

let tunguruMobileNo = BigInt(3489238819238);
console.log(tunguruMobileNo)
console.log(typeof tunguruMobileNo)

let tunguruFaceStructure = Symbol("@");
console.log(tunguruFaceStructure)
console.log(typeof tunguruFaceStructure)
console.log(typeof typeof tunguruFaceStructure)


// non primitive data type(store multiple data or collection of data)
//  object
//  Array

let obj = {
    name: "aditya",
    age: 25,
    email: "aditya@gmail.com",
    phone: 820834283
}

console.log(obj.name)
console.log(obj.email)

console.log(obj["phone"])
console.log(typeof typeof obj)
console.log(typeof typeof obj.phone)


// array
let arr = [1, 2, 3, 4, 5, "qlith",
    {
        name: "Inno",
        age: 30,
        email: "inno@gmail.com",
        arr: ["tunguru", 30, 9834928]

    }];
console.log(typeof arr);
console.log(arr[5])
console.log(arr[6].name)
console.log(arr[6].age)
console.log(arr[6].arr[2])



//Notes:

//**Javascript Data Types**

//JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.

//1. Primitive data type
//2. Non-primitive (reference) data type

//JavaScript primitive data types

//There are five types of primitive data types in JavaScript. They are as follows:

//String  :represents sequence of characters e.g. "hello"

//Number :represents numeric values e.g. 100

//Boolean  :represents boolean value either false or true

//Undefined  :represents undefined value

//Null  :represents null i.e. no value at all

//JavaScript non-primitive data types

//The non-primitive data types are as follows:

//Object  : represents instance through which we can access members

//Array  : represents group of similar values

//RegExp  : represents regular expression

//**Javascript Variable Declaration**

//1. Var
//2. Let
//3. Const








