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
var reverseList = function(head) {

        // If list is empty or has only one node → already reversed
        if (head === null || head.next === null) {
            return head;
        }

        let prev = null;      // previous node (will become new tail)
        let curr = head;      // current node we're processing

        // Continue until we reach the end of the list
        while (curr !== null) {
            // Step 1: Save the next node (the one we'll lose if we change curr.next)
            let nextTemp = curr.next;

            // Step 2: Reverse the link → point current node backwards
            curr.next = prev;

            // Step 3: Move pointers forward for next iteration
            prev = curr;          // prev becomes current node
            curr = nextTemp;      // move to the next original node
        }

        // After loop, prev is the new head (last node we processed)
        return prev;
    

    
};