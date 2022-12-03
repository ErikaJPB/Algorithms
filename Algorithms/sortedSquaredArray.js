// O (nlogn) time | O(n) space
function sortedSquaredArray(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i] * array[i]);
  }

  newArr.sort((a, b) => a - b);

  return newArr;
}

// O(n) time | O(n) space
function sortedSquaredArray(array) {
  let newArr = [];

  let start = 0;
  let end = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    let smallerValue = array[start];
    let largerValue = array[end];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      newArr[i] = smallerValue * smallerValue;
      start++;
    } else {
      newArr[i] = largerValue * largerValue;
      end--;
    }
  }

  return newArr;
}

// With a Map
function sortedSquaredArray(array) {
  let newArr = array.map((i) => i * i);
  newArr.sort((a, b) => a - b);
  return newArr;
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
console.log(sortedSquaredArray([-2, -1, 1, 3]));
console.log(sortedSquaredArray([-7, -5, -4, 3, 6, 8, 9]));
