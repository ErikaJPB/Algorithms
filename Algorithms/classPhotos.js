// O(n log n) time || O(1) space

function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.

  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const colorFirstRow =
    redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";

  for (let i = 0; i < redShirtHeights.length; i++) {
    const redShirtHeight = redShirtHeights[i];
    const blueShirtHeight = blueShirtHeights[i];

    if (colorFirstRow === "RED") {
      if (redShirtHeight >= blueShirtHeight) return false;
    } else if (blueShirtHeight >= redShirtHeight) return false;
  }
  return true;
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5])); // true
