//O(n+m) time || O(c) space

function generateDocument(characters, document) {
  // Write your code here.
  let countChar = {};
  for (let character of characters) {
    if (!(character in countChar)) countChar[character] = 0;
    countChar[character]++;
  }
  for (let character of document) {
    if (!(character in countChar) || countChar[character] === 0) return false;
    countChar[character]--;
  }
  return true;
}

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
); // true
