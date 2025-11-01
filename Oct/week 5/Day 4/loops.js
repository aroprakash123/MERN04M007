console.log("Today we are going to learn loops")
//Loops in JS
  //-->Loops are used to execute a piece of code again and again.

  //1. for Loop 
       //syntax
       //for(declaration/initialization ; conditional part ; update part){
            
       
  //2.Infinite Loop
      //
  //3.while Loop
      //syntax
     //while(condition){

         //do some work

     //}


  //4.do-while loop
     //syntax
     //do{
     //   //do some work
     //}while(condition);

     

//   for(let i=1;i<5;i++){
//     console.log("Hello");
//   }

// let i=1;
//    for(i=1;i<5;i++){
//      console.log("Hello");
//   }
//   console.log(i)

// let i=1;
//    for(i=1;i<5;){
//      console.log("Hello")

//      i++
//   }
//   console.log(i);



// //let i=1;
//    for(i=1;i<5;){
//      console.log("Hello")

//      i++
//   }
//   console.log(i);//error aasiba because i variable bhitare declare hei ni

//   let i;
//    for(i=1;i<=10;){
//      console.log("Hello")

//      i++
//   }
//   console.log(i);//Undefined because of i dont declare i in block



// let a=1;
// while(a<=10){
//     console.log("Qlith")
//     a++;//updation part
// }



// let arr=[1,2,3,4,5];
// while(arr.length < 3){
//     console.log("hello");
//     arr.pop()
// }


// let arr=[1,2,3,4,5];
// while(arr.length !=0){
//     console.log("hello")
//     arr.pop()//termination 
// }

// do{
//     console.log("Bye")
// }while (false);

//find even number from 0 to 100

// let i=0;
//     for(i=0;i<=100;i++){
//       if(i%2==0){
//         console.log(i)
//       }
//    }

   
//     for( let i=0;i<=100;i++){
//       if(i%2==0){
//         console.log(i)
//       }
//    }


 let game;
 while(game!=50){
     game=prompt("Enter the value")
     if(game==50){
        console.log("Matched")
     }
 }


// let userNo=20;
// while(true){
//     let promptNo=prompt("Enter a number");
//     if(promptNo ==== userNo){
//         console.log("match");
//         break;
//     }
// }
