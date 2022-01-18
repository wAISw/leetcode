class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = this.tail = null;
  }
  push(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      // .. x <-> n
      //          ^
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }
  shift() {
    const head = this.head;
    this.splice(this.head);
    return head;
  }
  splice(node) {
    // всего одна нода в списке
    if (!node.prev && !node.next) {
      this.head = this.tail = null;
      // это хвост
    } else if (!node.next) {
      this.tail = node.prev;
      this.tail.next = null;
      // это голова
    } else if (!node.prev) {
      this.head = node.next;
      this.head.prev = null;
      // где-то в середине...
    } else {
      // prev <-> next
      const next = node.next;
      const prev = node.prev;
      prev.next = next;
      next.prev = prev;
      node.next = node.prev = null;
    }
    this.length--;
  }
}

const createLinkedListFromArray = (arr) => {
  const linkedList = new LinkedList();
  arr.forEach((value, key) => {
    linkedList.push(new ListNode(key, value));
  });
  return linkedList;
};
// Delete Node in a Linked List
// Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.
// It is guaranteed that the node to be deleted is not a tail node in the list.

// Constraints:
// The number of the nodes in the given list is in the range [2, 1000].
// -1000 <= Node.val <= 1000
// The value of each node in the list is unique.
// The node to be deleted is in the list and is not a tail node

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

// tests
const arr = [
  {
    head: [4, 5, 1, 9],
    node: 5,
    output: [4, 1, 9],
  },
  //   {
  //     head: [4, 5, 1, 9],
  //     node: 1,
  //     output: [4, 5, 9],
  //   },
];
arr.forEach(({ head, node, output }) => {
  const ll = createLinkedListFromArray(head);
  //   if (JSON.stringify(matrix) == JSON.stringify(output)) {
  //     console.log('res', matrix, 'expected', output, 'passed')
  //   } else {
  //     console.log('res', matrix, 'expected', output, 'failed')
  //   }
});

// Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;
  while (n > 0) {
    n--;
    fast = fast.next;
  }

  if (!fast) return head.next;

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.value = slow.next.value;
  slow.next = slow.next.next;
  return head;
};
