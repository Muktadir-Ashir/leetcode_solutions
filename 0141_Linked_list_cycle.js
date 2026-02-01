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

    let seen= new Set();
    let cur = head;

    while(cur){
        if(seen.has(cur)){
            return true;
        }
        seen.add(cur);
        cur=cur.next;
    }
    return false;
    
};