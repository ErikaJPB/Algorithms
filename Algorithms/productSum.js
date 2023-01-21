//O(n) time | O(d) space

function productSum(array, mult = 1) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], mult + 1);
    } else {
      sum += array[i];
    }
  }

  return sum * mult;
}
