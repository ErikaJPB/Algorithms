//O(n) time | O(n) space

function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let newLetters = [];

  for (let i = 0; i < string.length; i++) {
    let charactersCode = (string.charCodeAt(i) - 97 + key) % 26;
    newLetters.push(String.fromCharCode(charactersCode + 97));
  }
  return newLetters.join("");
}

console.log(caesarCipherEncryptor("xyz", 2)); // zab
