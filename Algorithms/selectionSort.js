//O(n^2) time | O(1) space

function selectionSort(array) {
  // Write your code here.

  for (let i = 0; i < array.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }

    if (i !== minIdx) {
      let temp = array[i];
      array[i] = array[minIdx];
      array[minIdx] = temp;
    }
  }

  return array;
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
