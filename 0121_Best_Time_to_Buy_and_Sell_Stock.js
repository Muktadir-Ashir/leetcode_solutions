/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // If array has 0 or 1 element → can't make any transaction
    if (prices.length <= 1) return 0;
    
    let minPrice = prices[0];      // track the minimum price seen so far
    let maxProfit = 0;             // track the maximum profit possible
    
    // Start from second day (index 1)
    for (let i = 1; i < prices.length; i++) {
        // Calculate profit if we sell today
        const currentProfit = prices[i] - minPrice;
        
        // Update max profit if current one is better
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
        
        // Update minimum price if we find a cheaper price
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    
    return maxProfit;
};