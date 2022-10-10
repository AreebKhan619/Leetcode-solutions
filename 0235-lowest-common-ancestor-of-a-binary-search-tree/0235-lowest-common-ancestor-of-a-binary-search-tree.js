/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, pTree, qTree) {
  let previousNode = null;
  let currentNode = root;

  while (currentNode) {
    var currentVal = currentNode.val;
    var p = pTree.val;
    var q = qTree.val
    
    if (p === currentVal || q === currentVal) return currentNode;
    else if (
      (p < currentVal && q > currentVal) ||
      (p > currentVal && q < currentVal)
    )
      return currentNode;
    else if (p < currentVal && q < currentVal) {
      previousNode = currentNode;
      currentNode = currentNode.left;
    } else if (p > currentVal && q > currentVal) {
      previousNode = currentNode;
      currentNode = currentNode.right;
    }
  }
};