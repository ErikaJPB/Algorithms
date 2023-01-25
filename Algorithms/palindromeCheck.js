// O(n^2) time | O(n) space
function isPalindrome(string) {
  // Your code here.

  let reversestr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversestr = reversestr + string[i];
  }
  return string === reversestr;
}

// O(n) time | O(n) space

function isPalindrome(string) {
  let reversestr = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversestr.push(string[i]);
  }
  return string === reversestr.join("");
}

//RECURSION
// O(n) time | O(n) space
function isPalindrome(string, i = 0) {
  const j = string.length - 1 - i;

  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}

console.log(isPalindrome("abcdcba"));
