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
      if (node.val!==null){
           traversalArr[level] = [...(traversalArr[level] || []),node.val]
      }
      getLevel(node.left, level + 1);
      getLevel(node.right, level + 1);
    }
  };
  getLevel(root, 0);
  return (traversalArr);
};