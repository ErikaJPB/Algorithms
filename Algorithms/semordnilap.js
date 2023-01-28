//O(n * m) time | O(n * m ) space

function semordnilap(words) {
  // Write your code here.
  let wordsSet = new Set(words);
  let result = [];

  for (let word of words) {
    let reverse = word.split("").reverse().join("");
    if (wordsSet.has(reverse) && reverse !== word) {
      result.push([word, reverse]);
      wordsSet.delete(word);
      wordsSet.delete(reverse);
    }
  }
  return result;
}
console.log(semordnilap(["diaper", "abc", "test", "cba", "repaid"]));
// [["diaper", "repaid"], ["abc", "cba"]]
