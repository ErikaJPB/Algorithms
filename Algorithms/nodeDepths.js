//                     1
//                   /   \
//                  2     3
//                /  \   /  \
//               4    5 6    7
//              / \
//             8  9

//Expected output = 16

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(h) space -- (h - height of BT)
//ITERATION
function nodeDepths(root) {
  let sumOfDepths = 0;

  let stack = [
    {
      node: root,
      depth: 0,
    },
  ];

  while (stack.length > 0) {
    let { node, depth } = stack.pop();
    if (node === null) continue;
    sumOfDepths = sumOfDepths + depth;

    stack.push({
      node: node.left,
      depth: depth + 1,
    });
    stack.push({
      node: node.right,
      depth: depth + 1,
    });

    return sumOfDepths;
  }
}

// O(n) time | O(h) space
//RECURSION
function nodeDepths(root, depth = 0) {
  if (root === null) return 0;
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}
