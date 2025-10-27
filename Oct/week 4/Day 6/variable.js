console.log("Today we are going to learn variable")

let a=10;
console.log(a)

let A=20;
console.log(A)

let a1=10;
console.log(a1)

let _=50;
console.log(_)

let $=60;
console.log($)

let $name1="here store some one name"
console.log($name1)

// let console=300;
// console.log(console)

//var
//let
//const

//var
//declaration
//declaration at global level
var name="xyz"
console.log(name)

{
    console.log(name)
}


function access(){
    console.log(name)
}

access()

//if i declare the variable in global level anywhere i can access the variable(that may be var,may be let , may be const)

//! declaration at block level

{
    var email="xyz@gmail.com"
    console.log(email)
}

console.log(email)// access heba katha nuha thats why let introduced

// if i declare a variable in block level i can access inside the block,i can access outside from the block,i can access inside a function


// ! declaration at function level

function declaration_variable(){
    var pass="123a";
    console.log(pass)
}
//console.log(pass)//block bahare access hebani 

declaration_variable()

//if i declare a variable in function level we can access the variable inside the function only
//i cannot access the variable outside from the function


   //let
//declaration

// !declaration at global level

let fullName="fakir";
console.log(fullName)

//if i declare the variable inside the global level using let keyword we can access the variable in any where

// ! declaration at block level

{
  let nickName="tunguru";
  console.log(nickName)
}

//console.log(nickName)//not access outside of block

//if i declare the variable inside the functon,we can access the variable inside the function,we cannot access the variable outside from the function(because of let restriction) 

// ! declaration at function level

function declare_functionlevel(){
    let bottle="water";
    console.log(bottle)
}

declare_functionlevel()

//if i declare the variable inside the function by using the let keyword only we can access the variable inside the function only,we can't access the variable outside the function.

 // const
//declaration
// ! global level declaration 

const veg="potato";
console.log(veg)

//if i declare the variable inside the global level using const keyword i can access the variable in anywhere

// ! declaration at block level
{
    const flower="lilly";
    console.log(flower)
}

//if i declare the variable using const keyword inside the block level,we can access the variable inside the block only,we can't access the const variable outside from the block 

// ! declaration at function level

function declare_functionLevel_const(){
    const animal="cat rabbit";
    console.log(animal)
}

declare_functionLevel_Const()

//if i declare the variable inside the function using const keyword,i can only access the variable inside the function,i cannot access the variable output of the function

//next class-way of declaration



//notes

//**JavaScript Variable**

//A JavaScript variable is simply a name of storage location. There are two types of variables in JavaScript : local variable and global variable.

//There are some rules while declaring a JavaScript variable (also known as identifiers).

//1. Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
//2. After first letter we can use digits (0 to 9), for example value1.
//3. JavaScript variables are case sensitive, for example x and X are different variables.

//Correct JavaScript variables

//1. var x = 10;
//2. var _value="sonoo";

//Incorrect JavaScript variables

//1. var 123=30;
//2. var *aa=320;