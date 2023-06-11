/*

let , var , const

""

33

for
if


function

*/

// let myName = "Bayan"

// let myAge = 25

//for (let i =0; i<10 ; i++) {
//console.log(i)
//if (i==5) {
//  console.log(i)
//}

//break ;

//}

//  for (let i =0 ; i<10 ; i++) {

//  if(i%2==0 )   {
//    console.log(i) 
//  } else if(i==5) {
// continue; 

// }
//   else{
//     console.log("sorry"+ i)
//   }  
// }


// let theUserName = prompt("please neter your name")

// function OddNumbers(firstNumber, secondNumber) {

//     for (let i = firstNumber; i < secondNumber; i++) {

//         if (i % 2 == 1) {
//             console.log("this id an odd number" + " " + i + " " + theUserName)

//         }

//     }


// }

// OddNumbers(10, 18)



let mystudents = ["ahmad" , "ali" , "anas","omar" , 99]; 
let mystudentsmar = [60,40,30,88 , "abdullah"];

 function markCalculate(params) {
    for(let k = 0 ; k<mystudentsmar.length ; k++){
        if(mystudentsmar[k]>=50){
            console.log(
            "cong" + " "+mystudents[k] + 
            " " +"you scored" +" " +mystudentsmar[k] +
            " " + "and you have passed "
            ) ; 

        } else if(mystudentsmar[k]<50){
            console.log("sorry" + " "+mystudents[k] + 
            " " +"you scored" +" " +mystudentsmar[k] +
            " " + "and you have failed");

        } else{
            console.log("please enter a valid number between 0 and 100"); 
        }

    }
} 
markCalculate();



