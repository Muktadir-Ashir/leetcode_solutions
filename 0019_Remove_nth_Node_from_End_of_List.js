/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Create a dummy node pointing to head
        const dummy = new ListNode(0, head);
        
        let fast = dummy;
        let slow = dummy;
        
        // Move fast pointer n steps ahead
        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }
        
        // Move both pointers until fast reaches the end
        // When fast is at null, slow will be at the node BEFORE the one to delete
        while (fast.next !== null) {
            fast = fast.next;
            slow = slow.next;
        }
        
        // Remove the nth node from end
        slow.next = slow.next.next;
        
        // Return the new head (skip dummy)
        return dummy.next;
};