console.log("today some special methods");

//every()->Checks if all elements in the array pass the test.Returns true otherwise false.
let arr=[1,2,3,4,2,5,-1];
let isGreater=arr.every((v)=>{
    return v>0
})
console.log(isGreater);




//some()-->Checks if at least one element in the array passes the test.1st element check kare then 2nd one 
let isgre=arr.some((v)=>{
    return v>0
})
console.log(isgre)


//find()
let value=arr.find((v)=>{
    return v===2;
})
console.log(value)//output 2

let lastvalue=arr.findLast((v,i)=>{
    console.log("idex",i);
    return v===2
})
console.log(lastvalue)//last ru finding start kariba

let valueIdex=arr.findIndex((v)=>{
    return v===2;
})
console.log(valueIdex)


//every()
//--------------------------------------------
//Q1.Checks if all numbers are even
let nums=[2,4,6,8]
let isEven=nums.every((v)=>{
    return v%2===0
})
console.log(isEven)//==--->value check  &   ===>datatype check

//Q2.Checks if all strings have length > 3.
let str=["apple","banana","kiwi"]
let isGreaterr=str.every((v)=>{
    return v.length>3
})
console.log(isGreaterr)
//OR
//console.log(str.every(v => v.length >3));

//Q3.Checks if all users are active (active = true):
let users=[
    {name:"A",active:true},
    {name:"B",active:true},
    {name:"C",active:false}
];

console.log(users.every(v => v.active === true));

//OR

// let isTrue=users.every((v)=>{
//     return v.active === true;
// })
// console.log(isTrue)


//Q4.Checks if all elements in an array are unique using only every ()
//          0 1 2 3 4 5
let numArr=[1,2,4,3,5,2]
console.log(numArr.every((v,i)=>numArr.indexOf(v)===i))

//some()
//---------------------------
//Q5.check if any product is out of stock:
let products=[
    {name:"pen",qty:10},
    {name:"Book",qty:0},
    {name:"Pencil",qty:5}
];
console.log(products.some(v => v.qty ===0)) 


//find()
//-------
//Q6.Find the first user with admin = true:

let listOfuser=[
    {name:"A",admin:false},
    {name:"B",admin:false},
    {name:"C",admin:true}
];

console.log(listOfuser.find(v=> v.admin===true))


//sort()
let numbersArr=[1,2,5,3,9,6];
console.log(numbersArr.sort((a,b)=>b-a));

//Math
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)//sqroot of 1/2
console.log(Math.LN2)
console.log(Math.LN10)
console.log(Math.LOG2E)
console.log(Math.LOG10E)

//function //methods
console.log(Math.max(1,2,4,50))
console.log(Math.min(1,2,3,4))
console.log(Math.round(1.200))
console.log(Math.floor(-4.5))
console.log(Math.ceil(4.3))
console.log(Math.random())// 0 to less then 1 give me random number in output
console.log(Math.pow(2,3))
console.log(Math.sqrt(40))
console.log(Math.cbrt(8))

console.log(Math.abs(2.31313131313))

let obj={
    name:"qlith",
    age:20,
    phone:49868468
}



delete obj.phone//phone key delete hai jiba 
console.log(obj)

Object.freeze(obj)//no one can change the obj 
obj.age=40;
console.log(obj)

// obj.name="innovation"
// console.log(obj)

console.log(Object.values(obj))//dont show keys
console.log(Object.keys(obj))//only shows keys
console.log(Object.entries(obj))//convert each entries into an array

console.log(Object.fromEntries([[1,1],[2,4],[3,9]]));

let x={
    a:1
}
let y={
    b:4
}
// console.log(Object.assign(x,y))
// console.log(x)





