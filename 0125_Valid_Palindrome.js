/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Skip non-alphanumeric characters from left
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        
        // Skip non-alphanumeric characters from right
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        
        // Now both left and right point to alphanumeric characters (or crossed)
        if (left < right) {
            // Compare ignoring case
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            // Move pointers inward
            left++;
            right--;
        }
    }
    
    // If we reached here, it's a palindrome
    return true;
};

// Helper function
function isAlphanumeric(c) {
    return (c >= 'a' && c <= 'z') ||
           (c >= 'A' && c <= 'Z') ||
           (c >= '0' && c <= '9');
}