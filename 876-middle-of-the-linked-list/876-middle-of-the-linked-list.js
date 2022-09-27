/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let mainPointer = head;
  fastPointer = head;

  while (fastPointer) {
    if (fastPointer.next) {
      fastPointer = fastPointer.next.next;
    } else {
      return mainPointer;
    }
    mainPointer = mainPointer.next;
  }
  return mainPointer
};