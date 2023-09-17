// this function about  math operation

function mindGame(number) {
  let stepOne = number * 3;
  let stepTwo = stepOne + 10;
  let stepThree = stepTwo / 2;
  let stepFour = stepThree - 5;

  return stepFour;
}

// this function find out odd and even.

function evenOdd(string) {
  for (let i = 0; i < string.length; i++) {
    let element = string[i];
    if (string.length % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}


// this function doing less than and greater than find out small and big number.

function isLGSeven(number) {
  let smallerNumber = number - 7;
  if (smallerNumber < 7) {
    return smallerNumber;
  } else {
    return number * 2;
  }
}

// this function find out negative and positive number.

function findingBadData(array) {
  let badDataCount = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element < 0) {
      badDataCount = badDataCount + 1;
    }
  }
  return badDataCount;
}


// this function total value count, when total value 2000 up then Subtraction 2000.

function gemsToDiamond(friendOne, friendTwo, friendThree) {
  let one = friendOne * 21;
  let two = friendTwo * 32;
  let three = friendThree * 43;
  let totalCount = one + two + three;
  if (totalCount > 2000) {
    return totalCount-2000;
  }
  else {
    return totalCount;
  }
}

