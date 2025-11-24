// //Difference between html collection and node list

// let boxList=document.getElementsByClassName("box");
// console.log("before adding",boxList.length)

// //html collection are live

// //this is used for creating a new div
// // let div=document.createElement("div");
// // div.className="box";
// // div.innerText="item5";
// // document.body.appendChild(div);
// // console.log("after adding",boxList.length);


// //using Query Selector
// let boxes=document.querySelectorAll(".box")
// console.log(boxes.length)

// let div=document.createElement("div");
// div.className="box";
// div.innerText="item5";
// document.body.appendChild(div);

// console.log(boxes.length)

// console.log(Array.from(boxes))




// document.body.style="background-color:red;font-size:20px";

// document.body.style.cssText="background-color:red;font-size:20px";
// console.log(document.body.firstChild.firstChild.innerText);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(document.body.children);


let p=document.getElementById("para")
// console.log(p.className);
//p.className="paragraph para1 para2 para3";
//console.log(p)

console.log(p);
p.classList.add("para4");
console.log(p);
p.classList.remove("para1")
console.log(p)
console.log(p.classList.contains("para1"))
p.classList.toggle("para5");//toggle check kare class jadi achhi then remove kari deba & jadi nahi add karideba
console.log(p)


document.querySelector("#btn").addEventListener("click",()=>{
    document.body.classList.toggle("white");
})
