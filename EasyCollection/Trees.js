const { Node } = require('../BinaryTree');
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

  if (!root || !!root.val) {
    return isSymmetric(root.left) && isSymmetric(root.right);
  }
  return false;
};


const tree = new Node(1);
tree.left = new Node(2);
tree.left.left = new Node(3);
tree.left.right = new Node(4);
tree.right = new Node(2);
tree.right.left = new Node(4);
tree.right.right = new Node(3);

// TODO @abdulov remove console.log
// console.log('%c tree', 'background: gray; color: #fff', tree);

// TODO @abdulov remove console.log
console.log('%c isSymmetric', 'background: gray; color: #fff', isSymmetric(tree));
