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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if(!root?.left && !root?.right) return root;
  const invert = (nodeUnderConsideration) => {
    if (nodeUnderConsideration.left || nodeUnderConsideration.right) {
      let temp = nodeUnderConsideration.left;
      nodeUnderConsideration.left = nodeUnderConsideration.right;
      nodeUnderConsideration.right = temp;
      invertTree(nodeUnderConsideration.left);
      invertTree(nodeUnderConsideration.right);
    }
  };

  invert(root);
  return root;
};