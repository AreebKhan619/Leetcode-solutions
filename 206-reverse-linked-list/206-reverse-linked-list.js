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

// Iterative solution
var reverseList = function(head) {
    let node = head;
    let reversed = null;
    while(node){
        const temp = new ListNode(node.val);
        temp.next = reversed;
        reversed = temp;
        node = node.next
    }
    return reversed;
};