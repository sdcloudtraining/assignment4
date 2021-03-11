// //STEP 1

// function halfNumber(num) {

//     let halfed = num/2;

//     console.log(`Half of ${num} is ${halfed}`);

//     return halfed;

// }

// halfNumber(2);

// //STEP 2

// function squareNumber(num) {
//     let squared;
//     squared = num^2;
//     console.log (`The square of ${num} is ${squared}`);
//     return squared;
// } 

// squareNumber(2);

// //STEP 3

// percentOf = (num1, num2) => {
//     let percented;

//     percented = num2/num1 x 100;

//     console.log (`${num1} is ${percented}% of ${num2}`);
// }

// percentOf(2, 4);


// //STEP 4

// findModulus = (num1, num2) => {
//     let modulsed;

//     modulused = num1%num2;

//     console.log (`${modulused} is the modulus of ${num2} and ${num1}`);
// }

// findModulus(4, 10);


//STEP 5  HAD TROUBLE WITH ARGUMENTS BECAUSE ARGUMENTS IS AN "ARRAY-LIKE" OBJECT RATHER THAN AN ARRAY
//  I wanted to use Arguments, but with prompt we will always know the array length, so with prompt there is really no added benefit to using arguments
//I tried turning arguments from an Array like object to an array but that did not work either.
//even when I just used arguments just for arguments.length, and not for iterating through the "array-like" parameter, the result returned was still NaN.
//i just did it without arguments


// let numbers = prompt("Enter numbers separated by a comma");

// let numbersArrayString = numbers.split(',');
// console.log (numbersArrayString + " Array of Strings");

// let numbersArrayInteger=[];

// for (i =0; i<numbersArrayString.length; i++){
   
//     numbersArrayInteger.push(parseInt(numbersArrayString[i]));
 
//  }

//  console.log (numbersArrayInteger + " Array of ParsedInts")


// function promptCalc (nums) {

//     // let numsFromArguments= Array.from(arguments);

//     let sum = 0;
//     for (let j =0; j < nums.length; j++) {

     
//         sum += nums[j];

//     }

//     console.log (`the sum of your numbers is ${sum}`);


// }


// promptCalc(numbersArrayInteger);
