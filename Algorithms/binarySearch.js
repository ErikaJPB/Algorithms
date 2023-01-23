//O(log(n)) time || O(1) space

function binarySearch(array, target) {
  // Write your code here.

  array.sort((a, b) => a - b);
  console.log(array);

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 71, 73], 33));

//Recursive Solution
// O(Log(n)) time | O(Log(n)) space

function binarySearchRecursive(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  if (left > right) return -1;

  const middle = Math.floor((left + right) / 2);

  const possibleMatch = array[middle];

  if (target === possibleMatch) {
    return middle;
  } else if (target < possibleMatch) {
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
}

console.log(binarySearchRecursive([0, 1, 21, 33, 45, 45, 71, 73], 33));
