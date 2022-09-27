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
    if (!fastPointer.next) {
        return mainPointer;
    }
      else if(!fastPointer.next.next){
          return mainPointer.next
      }
    fastPointer = fastPointer.next.next;
    mainPointer = mainPointer.next;
  }
  return mainPointer
};