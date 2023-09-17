//Problem 1: Let’s play a mind game---------> done

// function mindGame(number) {
//   let stepOne = number * 3;
//   let stepTwo = stepOne + 10;
//   let stepThree = stepTwo / 2;
//   let stepFour = stepThree - 5;

//   return stepFour;
// }
// const finalResult = mindGame(33);
// console.log(finalResult);


// Problem 2: Finding even or odd------ done>

// function evenOdd(string) {
//   for (let i = 0; i < string.length; i++) {
//     let element = string[i];
//     if (string.length % 2 == 0) {
//       return "even";
//     } else {
//       return "odd";
//     }
//   }
// }
// const finalOutput = evenOdd("chanda");
// console.log(finalOutput);


//Problem 3: Is Less or Greater than seven--------> done

// function isLGSeven(number) {
//   let smallerNumber = number - 7;
//   if (smallerNumber < 7) {
//     return smallerNumber;
//   } else {
//     return number * 2;
//   }
// }
// const numberResult = isLGSeven(15);
// console.log(numberResult);

// Problem 4: Finding Bad data---->done

// function findingBadData(array) {
//   let badDataCount = 0;

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element < 0) {
//       badDataCount = badDataCount + 1;
//     }
//   }
//   return badDataCount;
// }

// let badDataCountResult = findingBadData([-4, -9, -5, -33, -55]);
// console.log(badDataCountResult);



//Problem 5: Convert your gems into diamond----------> done

// function gemsToDiamond(friendOne, friendTwo, friendThree) {
//   let one = friendOne * 21;
//   let two = friendTwo * 32;
//   let three = friendThree * 43;
//   let totalCount = one + two + three;
//   if (totalCount > 2000) {
//     return totalCount-2000;
//   }
//   else {
//     return totalCount;
//   }
// }
// const finalResult = gemsToDiamond(100,5,1);
// console.log(finalResult);


