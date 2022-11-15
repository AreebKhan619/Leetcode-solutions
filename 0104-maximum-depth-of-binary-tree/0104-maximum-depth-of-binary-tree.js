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
var maxDepth = function (root) {
  const depthReturn = (node, level) => {
    if (!node) return level - 1;
    const depthOfLeft = depthReturn(node.left, level + 1);
    const depthOfRight = depthReturn(node.right, level + 1);
    return Math.max(depthOfLeft, depthOfRight);
  };

  return depthReturn(root, 1);
};