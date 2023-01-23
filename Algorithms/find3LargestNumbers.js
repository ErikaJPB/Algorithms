//O(n)  time || O(1) space

function findThreeLargestNumbers(array) {
  // Write your code here.

  let threeLargestNumbers = [null, null, null];

  for (const num of array) {
    updateLargestNumber(threeLargestNumbers, num);
  }

  return threeLargestNumbers;
}

function updateLargestNumber(threeLargestNumbers, num) {
  if (threeLargestNumbers[2] === null || num > threeLargestNumbers[2]) {
    shifAndUpdate(threeLargestNumbers, num, 2);
  } else if (threeLargestNumbers[1] === null || num > threeLargestNumbers[1]) {
    shifAndUpdate(threeLargestNumbers, num, 1);
  } else if (threeLargestNumbers[0] === null || num > threeLargestNumbers[0]) {
    shifAndUpdate(threeLargestNumbers, num, 0);
  }
}

function shifAndUpdate(array, num, index) {
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
