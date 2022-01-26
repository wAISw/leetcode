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
var deleteNode = function(node) {
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
var removeNthFromEnd = function(head, n) {
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


// Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
};


// Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
//
// Example 2:
// Input: list1 = [], list2 = []
// Output: []
//
// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]


// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.
JavaScript;
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let list = new ListNode();
  let head = list;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      list.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      list.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    list = list.next;
  }

  if (list1 !== null)
    list.next = list1;
  if (list2 !== null)
    list.next = list2;

  return head.next;
};

// Palindrome Linked List
// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false


// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.join('') === arr.reverse().join('');
};


// Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.


// Constraints:
// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let n1 = head;
  let n2 = head?.next?.next || null;
  while (n1?.next && n2?.next){
    if(n1 === n2){
      return true;
    }
    n1 = n1?.next;
    n2 = n2?.next?.next;
  }
  return false;
};
