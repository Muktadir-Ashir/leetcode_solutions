/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // Create a map for O(1) lookup of value → index in inorder
    const inorderIndex = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderIndex.set(inorder[i], i);
    }
    
    // Use a variable to track current position in preorder array
    let preIndex = 0;
    
    // Recursive helper function to build subtree for inorder range [start, end]
    function build(start, end) {
        // Base case: no nodes in this range
        if (start > end) {
            return null;
        }
        
        // Current root value comes from preorder (consumed in order)
        const rootVal = preorder[preIndex];
        preIndex++;
        
        // Create the root node
        const root = new TreeNode(rootVal);
        
        // Find where this root sits in the current inorder segment
        const inRoot = inorderIndex.get(rootVal);
        
        // Build left subtree (everything left of root in inorder)
        root.left = build(start, inRoot - 1);
        
        // Build right subtree (everything right of root in inorder)
        root.right = build(inRoot + 1, end);
        
        return root;
    }
    
    // Start recursion with full inorder range [0, n-1]
    return build(0, inorder.length - 1);
};