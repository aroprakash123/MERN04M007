
//by defalult fetch method-->get request

//1.get request---->for fetching the data from the backend
// let getData=async function (){
//     let response=await fetch("https://jsonplaceholder.typicode.com/posts");//fetch()-->API(address/location) rahiba
//     let json=await response.json();///json response object ku js object re convert kare
//     console.log(json)
// }
// getData()



//2.POST request------>store or create a new data.

//if we don't mention the id while creating,backend automatically create the id itself.

// let createData=async ()=>{
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts",{
//         method:"POST",
//         body:JSON.stringify({
//             title:"qlith",
//             desc:"this is qlith innovation",
//             age:20
//         }),
//         headers:{
//             'Content-type':'application/json'
//         },
//     });
//     let data=await res.json()
//     console.log(data)
// }
// createData()



//3.PUT Request----->update the exixting data

// let updateData=async ()=>{
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
//         method:"PUT",
//         body:JSON.stringify({
//             title:"new title",
//             desc:"this is new body",
//             age:40
//         }),
//         headers:{
//             "Content-type":"application/json"
//         },
//     });
//     let data=await res.json();
//     console.log(data)
// }
// updateData();


//4.delete request----->delete the existing data
// let deleteData=async ()=>{
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
//         method:"DELETE"
//     })
//     let data=await res.json();
//     console.log(data)

    
// }
// deleteData()


//Q.show all titles in the html page
let getData=async function (){
    let response=await fetch("https://jsonplaceholder.typicode.com/posts");
    let json=await response.json();
    let ul=document.createElement("ul");
    json.forEach(ele=>{
        let li=document.createElement("li");
        li.innerText=ele.title;
        ul.append(li);
    });
    document.body.append(ul)
}
getData()

//json ()--->it is a method
//JSON--->it is a Object

