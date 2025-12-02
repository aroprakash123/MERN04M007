
// let getData=function(value){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("value:",value)
//             reject("some error")
//             //resolve("successfully data ")
//         },2000)
//     })
// }
// getData(1).then((res)=>{
//     getData(2).then(()=>{
//         getData(3)
//     })
// }).catch((res)=>{
//     console.log(res)
// })

//resolve pai-->then() & reject pai--->catch()


//fetch method

//async keyword is used for the creating a asynchronous block.-->wait kariba ni next line ku palaeba

//await

// let getData=async function (){
//     let data=fetch("https://jsonplaceholder.typicode.com/posts");//fetch()  re location ba address rakhiba
//     data.then((res)=>{
//         let result=res.json();//json resolve object ku js object re convert kare
//         result.then((res)=>{
//             console.log(res)
//         })
//     })

   
// getData()

///await
let getData=async function (){
    let data=await fetch("https://jsonplaceholder.typicode.com/posts/100");
    let objData=await data.json();///json resolve object ku js object re convert kare
    console.log(objData)
}
getData()

//request is a object
//get request---->data get kariba
//post request--->create kariba
//put request--->update kariba
//delete request--->delete kariba


