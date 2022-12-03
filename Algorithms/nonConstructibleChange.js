// O(nlogn) time | O(1) space

function nonConstructibleChange(coins) {
  coins = coins.sort((a, b) => a - b);

  let change = 0;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > change + 1) return change + 1;
    change += coins[i];
  }

  return change + 1;
}

console.log(nonConstructibleChange([1, 2, 5])); // 4
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])); // 20
