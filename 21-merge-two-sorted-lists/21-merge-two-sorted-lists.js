/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = null;
  let tail = null;

  const appendOrCreate = (node) => {
    if (!tail) {
      // this also means that the head doesn't exist
      tail = node;
      head = tail;
    } else {
      tail.next = node;
    }
  };

  const executeMerge = (node1, node2) => {
    if (node1 || node2) {
      if (!node1) appendOrCreate(node2);
      else if (!node2) appendOrCreate(node1);
      else {
        let smallerNode = node1;
        let biggerNode = node2;
        if (smallerNode.val > biggerNode.val) {
          smallerNode = node2;
          biggerNode = node1;
        }
        const nodeToAppend = new ListNode(smallerNode.val);
        if (!head) {
          head = nodeToAppend;
          tail = head;
        } else {
          tail.next = nodeToAppend;
          tail = tail.next;
        }
        executeMerge(smallerNode.next, biggerNode);
      }
    }
  };
  executeMerge(list1, list2);

  return head || list1 || list2;
};