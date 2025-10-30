console.log("Today is the second class of the operator")
// let num1=2;
// let num2=3;
// console.log((3+4)-5);

// let obj={
//     name:"xyz"
// }
// console.log(obj.age)

// console.log({} == {});
// console.log([] == []);

// console.log(undefined == undefined)
// console.log(null == null)
// console.log(undefined == {})
// console.log(null == {})
// console.log(undefined == null)

// console.log(false && "it is true")//left side true thile execute heba na hele nahi,left side false thile stop hei jiba

// console.log(true && true)
// console.log(true && "true")



//Conditional Statements-->

//!if statement
//if-else statement
//else-if statement

//syntax
//if(condition){
   //Statement
//}

if(false){
    console.log("this is execute only if the condition is true")
}else{
    console.log("this is execute only if the condition is false")
}

//if(true)
//   console.log(first)


// if(false){

// }else if(false){

// }else{

// }

// //cond ? "if true" : "if false"
// console.log(null ? "it is true":"it is false")

// if(undefined){
//     console.log("it is 2")
// }

// let a=2;
// if((a<2) && (a++<4)){
//     console.log()
// }






// const number=prompt("Enter a number")
// if(number %5==0){
//     console.log("it is multiple of 5")
// }else{
//     console.log("it is not multiple of 5")
// }

const mark=prompt("Enter a mark")
 if(mark>=80 && mark<=100){
    console.log("Grade A")
}else if(mark>=70 && mark<=79){
      console.log("Grade B")
}else if(mark>=60 && mark<=69){
      console.log("Grade c")
}else if(mark>=50 && mark<=59){
      console.log("Grade D")
}else if(mark>=0 && mark<=49){
      console.log("Grade F")
}else{
    console.log("Invalid Score")
}





const Option="b"
switch (Option) {
    case "c":
        console.log("this is c")
        break;
    case "b":
    console.log("this is b")
    break;

    default:
        break;
}




// **Javascript Conditional Statements:**

// 1.If statement

// It evaluates the content only if expression is true. The signature of JavaScript if statement is given below.

// Syntax :

// if(expression){

// //statement

// }

// 2.If...else Statement

// It evaluates the content whether condition is true of false.

// syntax :

// if(expression){

// //content to be evaluated if condition is true

// }  else{

// //content to be evaluated if condition is false

// }

// 3.If...else if statement

// It evaluates the content only if expression is true from several expressions.

// Syntax:

// if(expression1){

// //content to be evaluated if expression1 is true

// } else if(expression2){

// //content to be evaluated if expression2 is true

// }  else if(expression3){

// //content to be evaluated if expression3 is true

// }  else{

// //content to be evaluated if no expression is true

// }

// 4.JavaScript Switch statement

// Switch Statement Execute the block of code depend on the different cases..

// Syntax:

// switch(expression) {

// case n: // code block

// break;

// case n: //code block

// break;

// default:

// //code block

// break;

// }

// Note: if we not give the break keyword then ,even the condition is satisfied it will execute the remaining blocks.