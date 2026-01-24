/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // 1. If array is empty, return 0
    if (nums.length === 0) return 0;
    
    // 2. Create a Set for O(1) lookups (automatically removes duplicates)
    const numSet = new Set(nums);
    
    // 3. Variable to track the longest sequence found
    let maxLength = 0;
    
    // 4. Loop through each number in the set
    for (let num of numSet) {
        // Only start a sequence if (num - 1) does NOT exist
        // This means num is the START of a consecutive sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;
            
            // Keep extending the sequence as long as next number exists
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            
            // Update maxLength if this sequence is longer
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    
    return maxLength;
};