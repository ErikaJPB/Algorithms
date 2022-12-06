//                      A
//                    / | \
//                   B  C  D
//                  / \   / \
//                 E   F G   H
//                    / \ \
//                   I   J K

// Expected Output = [A, B, E, F, I, J, C, D, G, K, H]

// O(v+e) time | O(v) space
// v-vertice e-edge
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);

    for (let child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
