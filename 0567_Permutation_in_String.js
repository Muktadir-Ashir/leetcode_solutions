/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) return false;

    // Step 1: Create frequency count for s1 (the pattern we want)
    const count = new Array(26).fill(0);

    for (let char of s1) {
        count[char.charCodeAt(0) - 97]++;   // 'a' → 0, 'b' → 1, ..., 'z' → 25
    }

    // Step 2: First window — count characters in s2[0 ... s1.length-1]
    for (let i = 0; i < s1.length; i++) {
        count[s2[i].charCodeAt(0) - 97]--;
    }

    // Step 3: Check if first window is already good
    if (isAllZero(count)) return true;

    // Step 4: Slide the window
    for (let i = s1.length; i < s2.length; i++) {
        // Remove the leftmost character of previous window
        count[s2[i - s1.length].charCodeAt(0) - 97]++;

        // Add the new rightmost character
        count[s2[i].charCodeAt(0) - 97]--;

        // Check if current window matches
        if (isAllZero(count)) return true;
    }

    return false;
};

// Helper: checks if every position in count array is zero
function isAllZero(arr) {
    for (let val of arr) {
        if (val !== 0) return false;
    }
    return true;
}