/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fastPointer = head
    
    while(fastPointer && fastPointer.next){
        fastPointer = fastPointer.next.next;
        head = head.next;
        if(fastPointer === head) return true
    }
    
    return false
};