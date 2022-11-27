// O(n) time | O(n) space

function areAnagrams(s1, s2) {
  if (s1.length !== s2.length) return false;

  freq1 = {};
  freq2 = {};

  for (character in s1) {
    if (character in freq1) {
      freq1[character] += 1;
    } else freq1[character] = 1;
  }

  for (character in s2) {
    if (character in freq2) {
      freq2[character] += 1;
    } else freq2[character] = 1;
  }

  for (key in freq1) {
    if (!freq2[key] || freq1[key] !== freq2[key]) return false;
  }
  return true;
}

console.log(areAnagrams("nameless", "salesman"));
