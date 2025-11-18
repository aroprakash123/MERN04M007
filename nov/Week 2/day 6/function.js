console.log("Hello we are going to learn Function of javascript.")
//function Types
//   =>anonymous function (it is function which has no name)

//e.g
//   function(){
//     //any statement
// }

//   declaration -> function keyword ,() ,implementation

//  => named function (it is function which has some name)
function F1(){
    console.log("my f1 is executing");
}

//   declaration -> function keyword , name of the function ,() ,implementation

F1();// callimg part


console.log(typeof F1)//function

//by default var 
function F1(){
    console.log("second function")
}
F1()

//=>expressional function (it is function which is in the form of expression)

let F2=function(){
  console.log("expressional function")
}

console.log(F2)

F2();


//   declaration -> (Let,Const,Var) keyword , variable,assignment operator ,anonymous fun
console.log(typeof F2)

let print=function(value,v,arr,v){
     console.log("value :",value,v,arr,v)
}
print(30,40,[1,2,3,4],80)
print(29)

//nested function

// let parent=function(){
//     let a=10;
//     let child=function(){
//         let b=30;
//         console.log("addition :",a+b)
//     }
//     child()
// }
// parent()

//or

// let parent=function(){
//     let a=10;
//     let child=function(){
//         let b=30;
//         console.log("addition :",a+b)
//     }
//     return child
// }
// parent()()//function curryng

let parent=function(){
    let a=10;
    let child=function(){
        let b=30;
        console.log("addition :",a+b)
        let child1=function(){
            console.log("child 1")
        }
        return child1
    }
    return child
}
parent()()()//function currying


let returnFun=function(){
    console.log("before return")
    let obj={
        name:"xyz",
        age:20
    }
    return obj;
}

let value=returnFun()
console.log(value)


//arrow function

let arrowFun=()=>{
    console.log("this is a arrow function");
}
arrowFun()

let addFun=(a,b)=>{
    let sum=a+b;
    return sum;
}
let sum=addFun(20,30);
console.log(sum)

//use a single arrow function and perform(+,-,*,/,**,%)
// let allOperation=(a,b,op)=>{
//     if(op=== "+"){
//         return a+b;
//     }else if(op === "-"){
//         return a-b;
//     }else if (op === "*"){
//         return a*b;
//     }else if (op === "/"){
//         return a/b;
//     }else if (op === "**"){
//         return a**b;
//     }else if (op === "%"){
//         return a%b;
//     }else{
//         console.log("Invalid symbol")
//     }
// }
// let sumOfNum = allOperation(10, 20, "+")
// console.log("sum ", sumOfNum)
// let sub = allOperation(20, 10, "-");
// console.log("sub", sub)
// let mult = allOperation(10, 20, "*");
// console.log("mult", mult)
// let div = allOperation(20, 10, "/");
// console.log("div", div)


//OR



let allOperation = (a, b, op) => {

    // if(op === "+"){
    //     return a+b;
    // }else if(op === "-"){
    //     return a-b;
    // }else if(op === "*"){
    //     return a*b;
    // }else if(op === "/"){
    //     return a/b;
    // }else if(op === "**"){
    //     return a**b;
    // }else if(op === "%"){
    //     return a%b;
    // }else{
    //     return "invalid symbole"
    // }

    return eval(`${a} ${op} ${b}`)
}

let sumOfNum = allOperation(10, 20, "+")
console.log("sum ", sumOfNum)
let sub = allOperation(20, 10, "-");
console.log("sub", sub)
let mult = allOperation(10, 20, "*");
console.log("mult", mult)
let div = allOperation(20, 10, "/");
console.log("div", div)







// - Notes==>
    
    
//     1.anonymous Function
    
//     a function which has no name 
    
//     syntax :
    
//        (){
    
//      // function code 
//     }
    
//     2.Named Function
    
//     A function with name is called as named function
    
//     Syntax :
    
//     function functionName(parameters) {
    
//     // function body
    
//     }
    
//     3 . Function with expression
    
//     It is the way to execute the anonymous function Passing whole anonymous function as a value to a variable is known as function with expression.
    
//     EX: let x=function(){
    
//     //block of code
    
//     }
    
//     x();
    
//     4.Nested function
    
//     A function which is declared inside another function is known as nested function. Nested functions are unidirectional .
    
//     i.e., We can access parent function properties in child function but vice-versa is not possible.
    
//     EX:
    
//     Function parent(){
    
//     let a=10;
    
//     function child(){
    
//     let b=20;
    
//     console.log(a+b);
    
//     }
    
//     child ();
    
//     }
    
//     parent ();
    
//     A **closure** is created when a **function is defined inside another function** and it **retains access to the outer function's variables**, even after the outer function has finished executing.
    
//     JavaScript currying
    
//     Calling a child function along with parent by using one more parenthesis is known as java script currying
    
//     Example:
    
//     Function parent () {
    
//     let a=10;
    
//     function child () {
    
//     let b=20;
    
//     console.log(a+b);
    
//     }
    
//     return child;
    
//     }
    
//     parent () ();     —>JavaScript currying



