/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    // Step 1: Sort the array (very important!)
        nums.sort((a, b) => a - b);   // now array is in increasing order: -4,-1,0,1,2,...

        const res = [];  // this will store all the valid triplets

        // Step 2: Loop through each possible first number
        for (let i = 0; i < nums.length; i++) {

            // Optimization 1: If the smallest number is already > 0 → no way to get sum = 0
            if (nums[i] > 0) break;

            // Optimization 2: Skip duplicate first numbers
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // Now we fix nums[i] as the first number
            // We will use **two pointers** to find the other two numbers
            let left = i + 1;          // start right after i
            let right = nums.length - 1; // start from the end

            // Step 3: Two-pointer movement
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum > 0) {
                    // sum is too big → decrease the biggest number
                    right--;
                } 
                else if (sum < 0) {
                    // sum is too small → increase the smallest number
                    left++;
                } 
                else {
                    // Found a valid triplet: sum == 0
                    res.push([nums[i], nums[left], nums[right]]);

                    // Move both pointers
                    left++;
                    right--;

                    // Skip duplicate left values (to avoid duplicate triplets)
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    // (We could also skip duplicate right values, but in this code it's not done — still correct because of sorting)
                }
            }
        }

        return res;
    }
    
