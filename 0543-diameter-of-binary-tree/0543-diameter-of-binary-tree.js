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
var diameterOfBinaryTree = function (root) {
  let maxDepth = 0;

  const getMaxDepth = (node, level) => {
    if (!node) return level - 1;
    const leftDepth = getMaxDepth(node.left, level + 1);
    const rightDepth = getMaxDepth(node.right, level + 1);
    const acrossSum = leftDepth + rightDepth - 2 * level;
    maxDepth = Math.max(acrossSum, maxDepth);
    return Math.max(leftDepth, rightDepth);
  };
  const rootDepth = getMaxDepth(root, 0);
  return Math.max(rootDepth, maxDepth);
};