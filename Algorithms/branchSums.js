//                        1
//                      /   \
//                     2     3
//                    / \    / \
//                   4   5  6   7
//                  / \  |
//                 8  9  10

// DFS - Depth First Search
// 1 + 2 + 4 + 8 = 15
// 1 + 2 + 4 + 9 = 16
// 1 + 2 + 5 + 10 = 18
// 1 + 3 + 6 = 10
// 1 + 3 + 7 = 11

// Expected output [15, 16, 18, 10, 11]

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(N) time | O(N)
function branchSums(root) {
  // Write your code here.
  let result = [];
  resultOfBranchSums(root, 0, result);
  return result;
}

function resultOfBranchSums(node, runningSum, result) {
  if (node === null) return;

  let newSum = runningSum + node.value;

  if (node.left === null && node.right === null) {
    result.push(newSum);
    return;
  }

  resultOfBranchSums(node.left, newSum, result);
  resultOfBranchSums(node.right, newSum, result);
}
