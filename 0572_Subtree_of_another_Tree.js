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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // Helper function to check if two trees are identical
    function isSameTree(p, q) {
        // If both are null → same tree
        if (p === null && q === null) return true;
        
        // If one is null and the other isn't → not same
        if (p === null || q === null) return false;
        
        // Check current value and both subtrees
        return p.val === q.val && 
               isSameTree(p.left, q.left) && 
               isSameTree(p.right, q.right);
    }
    
    // Base cases
    if (subRoot === null) return true;    // empty tree is subtree of any tree
    if (root === null) return false;      // can't have non-empty subtree in empty tree
    
    // Check three possibilities:
    // 1. Current node is the root of the subtree match
    // 2. Subtree exists in left subtree
    // 3. Subtree exists in right subtree
    return isSameTree(root, subRoot) || 
           isSubtree(root.left, subRoot) || 
           isSubtree(root.right, subRoot);
};