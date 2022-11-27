//O(n) time | O(1) space

function firstAndLast(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        start = i;
        while (i + 1 < arr.length && arr[i + 1] === target) {
          i = i + 1;
        }
        return [start, i];
      }
    }
    return [-1, -1];
  }
  
  console.log(firstAndLast([1, 2, 3, 5, 5, 5, 5, 5, 5, 6, 7, 8], 5));
  //[3,8]