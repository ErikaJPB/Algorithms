// O(n) time | O(1) space

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// function removeDuplicatesFromLinkedList(linkedList) {
//   let current = linkedList;

//   while (current !== null) {
//     let nextNode = current.next;
//     while (nextNode !== null && nextNode.value === current.value) {
//       nextNode = nextNode.next;
//     }
//     current.next = nextNode;
//     current = nextNode;
//   }
//   return linkedList;
// }

function removeDuplicatesFromLinkedList(linkedList) {
  let current = linkedList;

  while (current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return linkedList;
}
