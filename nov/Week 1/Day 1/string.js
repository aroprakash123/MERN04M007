// console.log("Today we are going to learn String")
console.log("Welcome to Javascript String world")

// let str1="first string";
// let str2='second string';
// let str3=`third string`;
// console.log(str1)
// console.log(str2)
// console.log(str3)  

// let str="Hello"    //mutable means changes the value in variable  string is immutable
// console.log(str[0])
// console.log(str[1])
// console.log(str[2])
// console.log(str[3])
// console.log(str[4])

// let obj={
//     name:"tunguru"
// }
// console.log(obj.name)


let str="Hello"
console.log(str[0])

str[0]="s";
console.log( typeof str[0]);

// string is also called object because of collection of character

//variable 
//object




let strobj=new String("Bye");
console.log(strobj)
console.log(strobj.valueOf()[2])
// console.log(strobj.valueOf(new String))

str=new String("New string")
console.log(str)

//string variable
//string methods
//Properties :

console.log(str.length)



//string methods
//1.toUpperCase()
//2.toLowerCase()

console.log(str.toUpperCase())
console.log(str.toLowerCase())

//literals means value.




let nameStr="brand bacardi";
console.log(nameStr+" limon")

console.log(nameStr+30)//it is string formate
console.log(nameStr,30)//it is number formate

 let ml=90;  


console.log(`brand bacardi in ${ml}ml`)








// **STRING CONCEPT IN JAVASCRIPT STRING:-**

// Collection of characters (or) bunch of characters we called it as string

// we can create a string by two different ways

//        ⇒ Direct literal

//        ⇒ String object

// eg: let str=”this is String”

//  console.log(str)

//       let str1=new String(”this is string”);

//        console.log(str1.valueOf() );

// Template Literals in JS

// A way to have embedded expressions in strings

// `this is a template literal`

// `string text **${expression}** string text`