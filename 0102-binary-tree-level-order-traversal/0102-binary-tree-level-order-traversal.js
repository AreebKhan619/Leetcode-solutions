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
var levelOrder = function (root) {
  const traversalArr = [];

  const getLevel = (node, level) => {
    if (node) {
      const arr = traversalArr[level] || [];
      if (node.val!==null) arr.push(node.val);
      traversalArr[level] = arr;
      getLevel(node.left, level + 1);
      getLevel(node.right, level + 1);
    }
  };
  getLevel(root, 0);
  return (traversalArr);
};