
//asynchronous--1st line execute na hele next line jiba ni  / synchronous-->line by execute heba
// console.log("first line")
// setTimeout(()=>{
// console.log("second line")
// },5000)
// console.log("third line")


// Callback hell----->call multiple methods
// let getData=function(value,func){
//     setTimeout(()=>{
//            console.log("value:",value)
//            func()
//     },3000)
   
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5)
//             })
//         })
//     })
// });


//promise--reduce callback hell

//promise is a object.
//pending,resoleved,rejected

// let promise=new Promise((resolve,reject)=>{
//     // resolve("promise resolve");
//     reject("promise reject")
// });
// console.log(promise);


// let getData=function(value){
//     return new Promise((res , rej)=>{
//         setTimeout(()=>{
//             res("success")
//             console.log("value:",value)
//         },2000)
//     })
// }
// console.log(getData(1))
// //promise handle--next class



//spread operator 
//...
let arr1=[1,2,3];
let arr2=[4,5,6];
let spreadValue=[...arr1,...arr2]//spread operator use kale address store karibani  ,  only data aaniba aau spread kari deba ae thi
console.log(spreadValue)//[1,2,3,4,5,6]
//or
console.log(arr1.concat(arr2))

let obj1={
    x:2
}
let obj2={
    y:3
}

let spreadObj={...obj1,...obj2}
console.log(spreadObj)

//rest operator-->opposite of spread

let restFunction=(first,...arg)=>{
    console.log(first)///"first"parameters use kale 1 value ta first variable re store heba and rest part ta avg re store heba 
    console.log(arg)
}
restFunction(1,2,34,4,5)

