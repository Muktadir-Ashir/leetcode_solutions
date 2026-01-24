/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n);
    
    // Step 1: Fill answer with products of all elements to the LEFT
    answer[0] = 1;  // Nothing to the left of first element
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }
    // Now answer contains: [1, nums[0], nums[0]*nums[1], nums[0]*nums[1]*nums[2], ...]

    // Step 2: Multiply by products of all elements to the RIGHT (on the fly)
    let rightProduct = 1;  // Start from the right end
    for (let i = n - 1; i >= 0; i--) {
        answer[i] = answer[i] * rightProduct;
        // Update rightProduct to include current element for the next position
        rightProduct *= nums[i];
    }

    return answer;
};