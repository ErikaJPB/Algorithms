//O(n^2) time | O(1)space

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    let firstNum = array[i];
    for (j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

//O(n) time | O(n) space

function twoNumberSum(array, targetSum) {
  hash = {};
  for (const x of array) {
    const y = targetSum - x;
    if (y in hash) {
      return [y, x];
    } else {
      hash[x] = true;
    }
  }
  return [];
}

// O(nLog(n)) time | O(1) space
function twoNumberSum(array, targetSum) {
  const arr = array.sort();
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let result = arr[left] + arr[right];
    if (result === targetSum) {
      return [arr[left], arr[right]];
    } else if (result < targetSum) {
      left = left + 1;
    } else if (result > targetSum) {
      right = right - 1;
    }
  }
  return [];
}

console.log(twoNumberSum([4, 5, 7, 8, 2, 1], 10));
