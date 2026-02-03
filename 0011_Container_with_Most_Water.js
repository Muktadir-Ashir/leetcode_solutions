/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

        let l = 0;
        let r = height.length - 1;
        let res = 0;

        while (l < r) {
            // area = min height × width
            res = Math.max(res, Math.min(height[l], height[r]) * (r - l));

            // move the pointer with smaller height (greedy choice)
            if (height[l] <= height[r]) l++;
            else r--;
        }

        return res;
    
};