console.log("Today we are going to learn String")

//function---> perform a specific task

let str="Hello";
console.log(str[0])

//methods
//to get indexing values

console.log(str.at(0))
console.log(str.charAt(1))

//string interpolation
let animal="dog"
console.log(`this is :${animal}`)

let url="https://www.qlith.com"
console.log(`${url}/login`);

//Concate Method
console.log("hello hye" +30)
console.log("hello".concat(" Bye"))


//trim method
let str1="Qlith   ";
console.log(str1.length)
console.log(str1.trim().length)
console.log(str1)

// console.log(str1.trimEnd())
// console.log(str1.trimStart())



//replace method 
console.log(str1.replace("l","L"));
console.log(str1)

let desc="this is my cat.his name is poppycat . my cat has two baby cat ."
console.log(desc.replaceAll("cat","dog"));

let num=20;
console.log(num) //store as a number
console.log(num.toString())//store as a string
console.log(typeof num.toString())


//Slice Method

let string="This is Qlith office";
// console.log(string.slice(2,6));//first index last index-1=5index heba
// console.log(string.slice(2));
console.log(string.slice(4))
console.log(string.slice(4,2))//starting index < ending end   output empty show karba
console.log(string.slice(5,6))//ending index-1  seithi pai   output re i show kariba
console.log(string.slice(-4))

console.log(string.slice(-4,-2 ))//fi putput heba



let strArr=string.split(" ");
console.log(strArr)

let string1="bluetooth,automaticdriving,sunroof,autoSongChange,AutoDoor"
let strArr1=string1.split(",");
console.log(strArr1)






- 
    
    // String methods:-
    
    // String.length
    
    // String.slice()
    
    // String.replace()
    
    // String.replaceAll()
    
    // String.toUpperCase()
    
    // String. toLowerCase
    
    // String.concat()
    
    // String.trim()
    
    // String.trimStart()
    
    // trimEnd()
    
    // String charAt()
    
    // String.at()
    
    // String split()



