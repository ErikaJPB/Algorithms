// O(nLog(n)) time  | O(1) space

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.

  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);

  if (!fastest) reverseArrayInPlace(redShirtSpeeds);

  let totalSpeed = 0;

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    const riderA = redShirtSpeeds[i];
    const riderB = blueShirtSpeeds[blueShirtSpeeds.length - i - 1];
    totalSpeed = totalSpeed + Math.max(riderA, riderB);
  }
  return totalSpeed;
}

function reverseArrayInPlace(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    const aux = array[start];
    array[start] = array[end];
    array[end] = aux;
    start++;
    end--;
  }
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true));
