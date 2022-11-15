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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const result = [];
    const traverse = (node) => {
        result.push(node.val)
        node?.left && traverse(node.left);
        node?.right && traverse(node.right);
    }
    root && traverse(root);
    return result
};