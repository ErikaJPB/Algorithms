//  O(n^2) time | O(1) space

function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let duplicate = false;
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j] && i !== j) duplicate = true;
    }
    if (!duplicate) return i;
  }

  return -1;
}

//   O(n) time | O(1) space

function firstNonRepeatingCharacter(string) {
  let frequency = {};

  for (let char of string) {
    if (!(char in frequency)) frequency[char] = 0;
    frequency[char]++;
  }

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (frequency[char] === 1) return i;
  }

  return -1;
}

console.log(firstNonRepeatingCharacter("abcdcaf")); // b index (1)
