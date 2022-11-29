var rotateRight = function (head, k) {
    if (!head || !k) return head;
  let length = 0;
  let currentNode = head;

  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }
  if (length === 1 || length === k) return head;

  if (k > length) {
    k = k % length;
  }
  if (!head || !k) return head;

  let currLen = 0;
  currentNode = head;
  let nodeNumberToDetach = length - k;
  let newHead;
  while (currLen < nodeNumberToDetach - 1 && currentNode) {
    currLen++;
    currentNode = currentNode.next;
  }
  newHead = currentNode.next;
  currentNode.next = null;
  currentNode = newHead;
  while (currentNode?.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = head;

  return newHead;
};