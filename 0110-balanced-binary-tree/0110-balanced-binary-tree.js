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
var isBalanced = function (root) {
  const levelCheck = (node, level) => {
    if (!node) return level - 1;
    const leftLevel = levelCheck(node.left, level + 1);
    const rightLevel = levelCheck(node.right, level + 1);
    if (typeof leftLevel === "boolean" || typeof rightLevel === "boolean") {
      return false;
    }
    if (Math.abs(leftLevel - rightLevel) > 1) return false;
    return Math.max(leftLevel, rightLevel);
  };
  if (!root?.left && !root?.right) return true;
  return levelCheck(root, 0);
};