console.log("Today we are going to learn DOM object");

//querySelector();-->accept id,class,tag       // return type-single element

let h1=document.querySelector("#head");
console.log(h1);

let divFirst=document.querySelector(".box");
console.log(divFirst);

let Firstp=document.querySelector("p");
console.log(Firstp);

let classes=document.querySelectorAll(".box");
console.log(classes);
console.log(classes[1]);


//H.W.
// Difference between html collection and node list 

console.log(divFirst.textContent)
//"textcontent " hidden content b show kari pariba
//  but "innerText" hidden text show kari paribani

divFirst.setAttribute("id","headingid")
console.log(divFirst)

console.log(divFirst.getAttribute("class"))


