console.log("Today we are going to learn rest partof the function")
console.log("Hello guys")

//arrow function
let arrowFun=()=>{
    console.log("this is the arrow function")
}
arrowFun()

//Higher order function
//It is a function which is accepting a function as a parameters and it is returning a function

// let add=(a,b)=>{
//     console.log("addition :",a+b)
// }
// add()//output NaN

let add=(a,b=40)=>{
    console.log("addition :",a+b)
}
add(10)


//for accepting
let hof=function(fun){
    fun()
}
hof(()=>{console.log("this is the argument func")})


// let hof=function(fun){
//     console.log(fun)
// }
// hof(
//     ()=>{
//         console.log("this is the argument func")
//     })

//for returning
let returnHof=function(){
    let child=function(){
        console.log("this is child function")
        return 10;
    }
    return child;
}
let childFunReturnValue=returnHof()()
console.log(childFunReturnValue)


//The function which is used as a argument at the time function calling is know as callback function

//Mostly we will use arrow function as callback function

//IIF(Immediate Invoking Function)
// (function(){
//     console.log("IIF function");
//     return()=>{console.log("nexted fun")}
// })()();


// function print(){
//     console.log("Qlith")
// }
// print()



//Array Specific Method
//forEach(),map(),fliters(),reduce(),find(),some(),every(),sort()

//1.forEach()
let arr=[1,2,3,4,5];
// for(let v of arr){
// console.log(v)
// }

arr.forEach((v,i)=>{
    console.log(i,"value :",v)
}) 

//map()
// let updateArr=[];
// for(let v of arr){
//     updateArr.push(v+2)
// }

let newArr=arr.map(v=>{
    return v+2;
})
console.log(newArr)

//filter()
let filterArr=arr.filterArr=arr.filter((v)=>{
    return v%2==0;
})
console.log(filterArr)

//OR
// let filterArr=arr.filterArr=arr.filter((v)=>
//     v%2==0;
// )
// console.log(filterArr)//another style




//reduce ()
let additionValue=arr.reduce((sum,v)=>{
    return sum+v
},0)
console.log("summation is :",additionValue)

let mult=arr.reduce((mult,v)=>mult * mult * v,1);
console.log("multiplication :",mult)







//- Notes
    
    // 6.Higher order function(HOF):
    
    // A function which accepts a function as a parameter is known as HOF It is used to perform multiple operations with different values.
    
    // Example:
    
    // Function hof (a, b, task){
    
    // Let res=task(a,b);
    
    // return res;
    
    // };
    
    // Let add=hof(10,20,function(x , y){
    
    // return x + y;
    
    // }
    
    // Let mul = hof(10,20,function(x , y){
    
    // return x*y;
    
    // }
    
    // Console.log(add());
    
    // Console.log(mul());
    
    // 7.IIF  (Immediately Invoked Function)
    
    // The "IIF" in JavaScript, when referred to as a function or expression, stands for Immediately Invoked Function Expression.
    
    // (function() {
    
    // var message = "Hello from an IIFE!";
    
    // console.log(message);
    
    // *// Logs: "Hello from an IIFE!"*
    
    // })();
    
    // 8.Callback function
    
    // This is the function which is used as a argument at the time of calling is known as
    // callback function.
    
    // Mostly we will use arrow function as a callback function because of its less syntax.
    
    // **Array special methods**
    
    // **forEach Loop in Arrays**
    
    // arr.forEach( callBackFunction )
    
    // CallbackFunction : Here, it is a function to execute for each element in the array
    
    // - A callback is a function passed as an argument to another function.
    
    // **arr. forEach(( val ) => {**
    
    // **console.log(val);**
    
    // **} )**
    
    // **Map**
    
    // Creates a new array with the results of some operation. The value its callback returns are used to form new array
    
    // arr.map( callbackFnx( value, index, array ) )
    
    // **let newArr = arr.map( ( val ) => {**
    
    // **return val * 2;**
    
    // **} )**
    
    // **Filter**
    
    // Creates a new array of elements that give true for a condition/filter.
    
    // Eg: all even elements
    
    // **let newArr = arr.filter( ( val ) => {**
    
    // **return val % 2 === 0;**
    
    // **} )**
    
    // **Reduce**
    
    // Performs some operations & reduces the array to a single value. It returns that single value.
