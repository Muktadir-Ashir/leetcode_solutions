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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const arr = [];
    
    dfs(root, arr);
    
    return arr[k - 1];
    
    
    // helper function
    function dfs(node, arr) {
        if (!node) return;
        
        dfs(node.left, arr);
        arr.push(node.val);
        dfs(node.right, arr);
    }
};