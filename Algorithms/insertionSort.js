//O(n^2) time  | O(1) space

function insertionSort(array) {
  // Write your code here.

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));
