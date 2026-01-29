class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0 ;
        let right = nums.length-1;

        while(left<right){
            const mid = Math.floor((left+right)/2);

            // If mid > right → drop is in right half
            if(nums[mid]>nums[right]){
                left=mid+1;
            } else{
                // Otherwise → drop is in left half (including mid)
                right=mid;
            }
        }
        // When left == right, we found the minimum
        return nums[left];

    }
}
