console.log("Today we are going to learn Arrays methods.")

let arr=[1,2,3,4,5];
console.log(arr)

let arrObj=new Array(6,7,8,9);
console.log(arrObj)

console.log(Array(3).fill("js"))
console.log(Array.of(1,2,3,4,5,6,7,8,9))
console.log(Array.from("abcdef"))//not accept number

//Manipulation methods
//1.push()
arr.push(6);//last re add heba 
console.log(arr)
arr.push(7,8,9,"hello",true)
console.log(arr)

//2.unshift()
arr.unshift(0,"bye")//First re add heba
console.log(arr)

// console.log(arr.unshift())//it return length

//3.pop()
arr.pop();//last ra gote ku remove kari deba 
console.log(arr)

// arr.pop()
// for(let i=1;i<=5;i++){
//     arr.pop()
// }

// console.log(arr)

//4.shift()-->it remove first one
arr.shift()
console.log(arr)

//5.includes()-->array re value acchi na nahi check kariba
console.log(arr.includes(7))

//6.at()-->access kariba
console.log(arr.at(0))
console.log(arr[1])

//7.indexOf()---->index value return kariba
console.log(arr.indexOf(5))
//jadi value na thile -1 show kariba mane revese hei jiba

//8.isArray()-->array ki nuha se check kariba
let num=0;
console.log(Array.isArray(num))//false

//9.reverse()--reverse re print heba
console.log(arr.reverse())
console.log(arr)

//10.toReversed()-->dont change in original it take a copy of original
console.log(arr.toReversed())
console.log(arr)

//11.sort()-->arranged in ascending order  chota ru bada
let numArr=[3,5,1,0];
// console.log(numArr.sort())
// console.log(numArr)

//12.toSorted()-->dont change as it is as original
console.log(numArr.toSorted())
console.log(numArr)

//13.slice()
console.log(arr)
console.log(arr.slice(1,5))

//14.splice()-->(starting index,how many u want to remove,what u add from the starting index) 3 ta value accept kare
arr.splice(0,2,"hii",4,5,6)
console.log(arr)

//15.join()
console.log(arr.join("-"))

//16.toString()-->convert to string
console.log(arr.toString());
//17.flat()-->combine in one array
console.log([[1,2],[3,4],[5,6]].flat())