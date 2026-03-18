/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const currentSum = numbers[left] + numbers[right];

        if (currentSum === target) {
            // return 1-based indices
            return [left + 1, right + 1];
        }
        else if (currentSum < target) {
            left++;     // sum is too small → need larger number
        }
        else {
            right--;    // sum is too big → need smaller number
        }
    }

    // The problem guarantees exactly one solution exists,
    // so we will never reach this line in valid test cases
    return [];
};