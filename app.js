/*

let , var , const

""

33

for
if


function

*/

let myName = "Bayan"

let myAge = 25

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



let mystudents = ["ahmad" , "ali" , "anas","omar"] 
let mystudentsmar = [60,40,30,88]

function markCalculate(params) {
    for(let i=0 ; i< mystudents.length ; i++ ){
        console.log(mystudents[i])


    } 
    for(let k = 0 ; k<mystudentsmar.length ; k++){
console.log(mystudentsmar[k])

    }
} 

markCalculate()