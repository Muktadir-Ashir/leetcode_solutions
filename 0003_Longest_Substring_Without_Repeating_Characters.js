/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        // Edge case: empty string
    if (!s) return 0;

    // Map to store the most recent index of each character
    const lastSeen = new Map();

    let left = 0;
    let maxLength = 0;

    // right pointer goes through each character
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If we have already seen this character AND it appeared inside the current window
        if (lastSeen.has(currentChar) && lastSeen.get(currentChar) >= left) {
            // Move left pointer to right after the previous occurrence
            left = lastSeen.get(currentChar) + 1;
        }

        // Update the last seen position of current character
        lastSeen.set(currentChar, right);

        // Update max length
        const currentLength = right - left + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
};