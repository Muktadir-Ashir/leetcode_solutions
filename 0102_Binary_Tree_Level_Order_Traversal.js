/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];                   // final answer list
    if (!root) return res;          // empty tree → return empty

    const q = new Queue();
    q.push(root);                   // first person in line = root

    while (!q.isEmpty()) {          // while line is not empty
        let level = [];             // temporary list for this level

        // Very important: remember how many nodes are in THIS level
        for (let i = q.size(); i > 0; i--) {
            let node = q.pop();     // take person from front of line

            if (node !== null) {    // safety check (in case we added null children)
                level.push(node.val);          // write down their value
                q.push(node.left);             // add their left child to line
                q.push(node.right);            // add their right child to line
            }
        }

        if (level.length > 0) {
            res.push(level);        // finished one level → save it
        }
    }

    return res;
};