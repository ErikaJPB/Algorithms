//O(n) time | O(space)

function runLengthEncoding(string) {
  // Write your code here.
  let encodedStrChar = [];
  let currentStrLen = 1;

  for (let i = 1; i < string.length; i++) {
    let currentChar = string[i];
    let prevChar = string[i - 1];

    if (currentChar !== prevChar || currentStrLen === 9) {
      encodedStrChar.push(currentStrLen.toString());
      encodedStrChar.push(prevChar);
      currentStrLen = 0;
    }
    currentStrLen++;
  }

  encodedStrChar.push(currentStrLen.toString());
  encodedStrChar.push(string[string.length - 1]);

  return encodedStrChar.join("");
}
console.log(runLengthEncoding("AAA")); //3A
