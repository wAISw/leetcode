const { Node } = require('../BinaryTree');

class TreeNode extends Node {
  constructor(value) {
    super(value);
  }
}

// Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
//
// Example 1:
//
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
//
// Example 2:
// Input: root = [1,null,2]
// Output: 2
//
// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// Depth First Search
// function maxDepth(root) {
//   if (!root) return 0
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
// }

// Breath First Search
function maxDepth(root) {
  if (!root) return 0;
  let max = 0;
  const queue = [[root, 1]];

  while (queue.length !== 0) {
    const [node, depth] = queue.shift();
    max = Math.max(max, depth);

    if (node.left) {
      queue.push([node.left, depth + 1]);
    }
    if (node.right) {
      queue.push([node.right, depth + 1]);
    }
  }

  return max;
}

// Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [2,1,3]
// Output: true

// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//   2
// 1   3
var isValidBST = function(root, minVal = -Infinity, maxVal = +Infinity) {
  if (!root) {
    return true;
  }
  if (root.val <= minVal || root.val >= maxVal) {
    return false;
  }

  return isValidBST(root.left, minVal, root.val) && isValidBST(root.right, root.val, maxVal);
};

// Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
//
// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true
//
// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false
//
// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  const isMirror = (root1, root2) => {
    if (!root1 && !root2) {
      return true;
    }
    if (!root1 || !root2) {
      return false;
    }
    return root1.val === root2.val
      && isMirror(root1.left, root2.right)
      && isMirror(root1.right, root2.left);

  };
  return isMirror(root.left, root.right);
};


// Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
//
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
//
// Example 2:
// Input: root = [1]
// Output: [[1]]
//
// Example 3:
// Input: root = []
// Output: []
//
// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let levelNum = 0;
  let solution = [];
  if (!root) return solution;
  let que = [root];
  while (que.length > 0) {
    let level = [];
    let newQue = [];
    for (let node of que) {
      level.push(node.val);
      if (node.left) newQue.push(node.left);
      if (node.right) newQue.push(node.right);
    }
    solution[levelNum] = level;
    que = newQue;
    levelNum++;
  }
  return solution;
};


// Convert Sorted Array to Binary Search Tree
// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
//
// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:
//
// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
//
// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);
  const add = (value) => {
    const newNode = new TreeNode(value);
    let currentNode = root;
    while (currentNode) {
      if (newNode.val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;

      }
    }
  };

  nums.slice(0, mid).forEach((num) => {
    add(num);
  });
  nums.slice(mid + 1, nums.length).forEach((num) => {
    add(num);
  });

  return root;
};

var sortedArrayToBST2 = function(nums) {
  if (nums == null || !nums.length) {
    return null;
  }

  let mid = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
  return node;
}

// const tree = new Node(1);
// tree.left = new Node(2);
// tree.right = new Node(3);
// tree.left.left = new Node(4);
// tree.right.right = new Node(5);
// //    3
// //  9   20
// //     15 7
//
// // TODO @abdulov remove console.log
// // console.log('%c tree', 'background: gray; color: #fff', tree);
//
// // TODO @abdulov remove console.log
// console.log('%c isSymmetric', 'background: gray; color: #fff', sortedArrayToBST([-10, -3, 0, 5, 9]));
