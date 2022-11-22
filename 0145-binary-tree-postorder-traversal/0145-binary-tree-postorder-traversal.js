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
var postorderTraversal = function(root) {
    const result = [];
    
    const traverse = (node) => {
        node?.left && traverse(node.left);
        node?.right && traverse(node.right);
        node && result.push(node.val)
    }
    
    traverse(root);
    
    return result;
};