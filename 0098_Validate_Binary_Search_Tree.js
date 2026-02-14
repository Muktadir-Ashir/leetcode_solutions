/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // Helper function that checks if a subtree is valid within [min, max] range
    function isValid(node, min, max) {
        // Empty tree is valid
        if (node === null) {
            return true;
        }
        
        // Current node's value must be strictly greater than min
        // and strictly less than max
        if (node.val <= min || node.val >= max) {
            return false;
        }
        
        // Left subtree must have values < node.val
        // Right subtree must have values > node.val
        return isValid(node.left, min, node.val) &&
               isValid(node.right, node.val, max);
    }
    
    // Start with full possible range for root
    return isValid(root, -Infinity, Infinity);
};