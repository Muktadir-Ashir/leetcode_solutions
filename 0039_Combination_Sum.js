/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    
    // Helper function (backtracking)
    function backtrack(startIndex, currentCombo, remaining) {
        // Base case: found a valid combination
        if (remaining === 0) {
            result.push([...currentCombo]); // make a copy and save
            return;
        }
        
        // Base case: overshot the target → stop this path
        if (remaining < 0) {
            return;
        }
        
        // Try each number starting from startIndex
        for (let i = startIndex; i < candidates.length; i++) {
            currentCombo.push(candidates[i]);
            // We can reuse the same number → pass i (not i+1)
            backtrack(i, currentCombo, remaining - candidates[i]);
            // backtrack (remove last choice)
            currentCombo.pop();
        }
    }
    
    // Start with empty combination and full target
    backtrack(0, [], target);
    
    return result;
};