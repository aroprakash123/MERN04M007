// console.log(Array.of(1,"hii"))
// let a =90;
// console.log(Array.of(1,"hii",a))

// console.log(Array.from("abc "))

// console.log(Array.from(2))//only string fetch kariba


// let b=[1,2,3,4]
// console.log(Array.of(b))

//10.Create a new array that contains the length of each string from ["React", "Node", "MongoDB"].
let strArr=["React", "Node", "MongoDB"];
let strNum=[];
for(let v of strArr){
    strNum.push(v.length)
}
console.log(strNum);

//12.Replace all negative numbers in [4, -2, 6, -9, 7] with 0.
// let numArr= [4, -2, 6, -9, 7] 
// for(let i=0; i < numArr.length; i++){
//     if(numArr[i]<0){
//         numArr[i]=0
//     }
// }
// console.log(numArr)

//12.Another Technique
let numArr= [4, -2, 6, -9, 7] 
for(let i=0; i < numArr.length; i++){
   if(numArr[i]<0){
    numArr.splice(i,1,0)
   } 
}
console.log(numArr)


//Reverse a string using array methods (split(), reverse(), join()).
let nameOFC="QLITH";
let afterSplit=nameOFC.split("");
let reverse=afterSplit.reverse();
console.log(reverse.join(""))
//OR
console.log(nameOFC.split("").reverse().join(""))


//Function In javascript
//function are the block of code which perform a specific task
//  we can reuse the function
// function has two parts
   // => declaration (implementation)
   // => calling or invocation

//we can create a function by using function reverse keyword
//Types of Function
//   =>anonymous function(it is a function which has no name)
//   =>named function(it is a function which has some name)
//   =>expressional function(it is function which is in the form of expression)
//   =>higher order function(it is a function which will accept a function as a argument,and which will return a function)
//   =>callback function(it is a function which is used as argument)
//   =>IIF(immediate invoke function) (it is function which has direct declaration and instant invocation or calling)

//we can call a function by using parantesis()
//The value which are passed at the time of declaration are called as parameters
//The values or variable which are passed at the time of invokation are called a arguments.












// //Notes:==>
// //**JavaScript Functions:**

// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// JavaScript Function Syntax A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Example:

// function name(parameter1, parameter2, parameter3) {

// // code to be executed

// }

// **Types of Functions in JS:**

// 1. Anonymous function
// 2. Named function
// 3. Function with expression
// 4. Nested function
// 5. Immediate invoking function
// 6. Arrow function
// 7. Higher order function
// 8. Callback function
