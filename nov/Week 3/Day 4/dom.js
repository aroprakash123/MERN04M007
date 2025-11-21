//getElementById()
let h1=document.getElementById("heading");
console.log(h1);

//getElementByClassName()-->returns array of class
let boxArr=document.getElementsByClassName("box")
console.log(boxArr[0].innerText)//innerText & textContent shows same output
// console.log(boxArr[0].textContent)
console.log(boxArr[0].innerHTML)//tag bhitare jau tag thiba seita show kariba output re
boxArr[0].innerText="item one";
console.log(boxArr[0])

boxArr[1].innerHTML="<h1>box heading</h1>";
console.log(boxArr[1])

//getElementByTagName()
let pArr=document.getElementsByTagName("p")
console.log(pArr[0])