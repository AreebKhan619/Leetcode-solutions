# Leetcode-solutions
Collection of LeetCode questions to ace the coding interview!



# Helper functions

## Binary tree maker
```
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const binaryTeeBuilder = (arr) => {
  const attachNode = (node, level) => {
    if (node) {
      const forLeft = 2 * level + 1;
      const forRight = 2 * level + 2;
      if (arr[forLeft]) {
        node.left = new TreeNode(arr[forLeft]);
        attachNode(node.left, forLeft);
      }
      if (arr[forRight]) {
        node.right = new TreeNode(arr[forRight]);
        attachNode(node.right, forRight);
      }
    }
  };

  const head = new TreeNode(arr[0]);
  attachNode(head, 0);
  return head;
};
```
