// // console.log([] ==[])//false

// // console.log({} ==={})//false

// let a={};
// let b=a

// console.log(a==b)
// console.log(a===b)//true because a aau b same address 

// console.log(0 === undefined)//false bacause o gote value but undefined is not a value 





//for-in loop    /       for-of

let arr=[1,2,3,4,5];

// for(let idx=0; idx<=arr.length-1;idx++){

//     console.log(idx + ":" ,arr[idx]);
// }

for(let i in arr){
    console.log(arr[i])
}

let obj={
    name:"tunguru",
    age:"30",
    email:"tunguru@gmail.com",
    password:"tunguru123",
    arr1:[6,7,8,9]
}

for(let key in obj){
    console.log(key , obj[key])
}

// for(let v of obj){
//     console.log(v)
// }

for(let v of obj.age){//v means
    console.log(v)
}


let numArr=[1,2,3,4,5,6,7,8,9];
for(let v of numArr){
    if(v==5){
        break;
    }
    console.log(v)
}

for(let v of numArr){
    if(v==5){
        continue;
    }
    console.log(v)
}




let stdObj={
    fullName:"Aro",
    phone:4981987,
    email:"aro@gmail.com"
}
console.log(stdObj.fullName)
stdObj.fullName="samir";//re-initialization
console.log(stdObj.fullname)

//stdObj={
      //  fullName:"abhaya"
    //}

//console.log(stdObj.fullName)




    
    // 4.JavaScript for...in loop
    
    // There are also other types of loops. The for..in loop in JavaScript allows you to iterate over all property keys of an object.
    
    // The syntax of the for...in loop is:
    
    // for(key in object){
    
    // //body of the for-in loop
    
    // }
    
    // Note: In each iteration of the loop, a key is assigned to the key variable. The loop continues for all object properties.
    
    // Example:
    
    // const student = { name: 'Monica', class: 7, age: 12 }
    
    // // using for...in
    
    // for ( let key in student ) {
    
    // // display the properties
    
    // console.log(`${key} => ${student[key]}`);
    
    // }
    
    // for...in with Arrays
    
    // You can also use for...in with arrays.
    
    // example
    
    // // define array
    
    // const arr = [ 'hello', 1, 'JavaScript' ];
    
    // // using for...in loop
    
    // for (let x in arr) {
    
    // console.log(arr[x]);
    
    // }
    
    // JavaScript for...of loop
    
    // The for...of loop was introduced in the later versions of JavaScript ES6.
    
    // The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).
    
    // The syntax of the for...of loop is:
    
    // for (element of iterable) {
    
    // // body of for...of
    
    // }
    
    // for...of with Arrays
    
    // The for..of loop can be used to iterate over an array.
    
    // example,:
    
    // // array
    
    // const students = ['John', 'Sara', 'Jack'];
    
    // // using for...of
    
    // for ( let element of students ) {
    
    // // display the values console.log(element);
    
    // }

