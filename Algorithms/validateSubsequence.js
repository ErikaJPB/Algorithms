// O(n) time | O(1)

// function isValidSubsequence(array, sequence) {
//   let arrIdx = 0;
//   let seqIdx = 0;

//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
//     arrIdx++;
//   }
//   return seqIdx === sequence.length;
// }

// O(n) time  | O(1) space
function isValidSubsequence(array, sequence) {
  let seqIdx = 0;

  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) {
      seqIdx++;
    }
  }
  return seqIdx === sequence.length;
}

console.log(isValidSubsequence([1, 5, 7, 9, 15], [1, 7, 9]));
