//O(n^2) time | O(1) space

function bubbleSort(array) {
  // Write your code here.

  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swap = true;
      }
    }
  }
  return array;
}
console.log(bubbleSort([8, 2, 10, 26, 15]));
