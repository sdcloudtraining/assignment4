// IMPORT THE MODULE

//CORS policy blocks the ability to test


import * as calc from './calculator.js';

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER

var collect1= prompt("Enter Number 1");
var collect2= prompt("Enter Number 2");
var collect3= prompt("Enter Operation");


let x=parseInt(collect1);
let y=parseInt(collect2);
collect3.toLowerCase;
let z = collect3;

if (isNaN(x) || isNaN(y)){
    alert("Enter Numbers only, Try Again"); setTimeout(function(){window.location.reload();}, 5000);
} 
else if (z !== "add" || z !== "divide" || z !== "multiply"  || z !=="divide") {
    alert("Enter Valid Operation Add, Subtract, Multiply, or Divide"); setTimeout(function(){window.location.reload();}, 5000);
} 

// CHECK TO SEE WHAT OPERATION THEY'RE USING
else {
    let result;

    switch (z) {
        case "add":
            result=calc.add(x,y);
            alert(result);
            break;

        case "subtract":
            result=calc.subtract(x,y);
            alert(result);
            break;

        case "multiply":
            resut=calc.multiply(x,y);
            alert(result);
            break;

        case "divide":
            result=calc.divide (x,y);
            alert(result);
            break;

        default:
            alert("Enter Valid Operation Add, Subtract, Multiply, or Divide"); setTimeout(function(){window.location.reload();}, 5000);} 
    }



// CALL THE APPROPRIATE FUNCTION