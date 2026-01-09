class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";

        const parts = [];

        // First: number of strings (4 bytes = enough for our constraints)
        const numStrings = strs.length;
        parts.push(String.fromCharCode((numStrings >> 24) & 0xFF));
        parts.push(String.fromCharCode((numStrings >> 16) & 0xFF));
        parts.push(String.fromCharCode((numStrings >> 8) & 0xFF));
        parts.push(String.fromCharCode(numStrings & 0xFF));

        // Then for each string: length (4 bytes) + content
        for (const s of strs) {
            const len = s.length;

            // 4-byte length
            parts.push(String.fromCharCode((len >> 24) & 0xFF));
            parts.push(String.fromCharCode((len >> 16) & 0xFF));
            parts.push(String.fromCharCode((len >> 8) & 0xFF));
            parts.push(String.fromCharCode(len & 0xFF));

            // actual string content
            parts.push(s);
        }

        return parts.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];

        const result = [];
        let i = 0;

        // Read number of strings (first 4 bytes)
        let numStrings = 0;
        numStrings = (str.charCodeAt(i++) << 24) |
                     (str.charCodeAt(i++) << 16) |
                     (str.charCodeAt(i++) << 8)  |
                     (str.charCodeAt(i++));
        
        for (let count = 0; count < numStrings; count++) {
            // Read length of next string (4 bytes)
            let len = 0;
            len = (str.charCodeAt(i++) << 24) |
                  (str.charCodeAt(i++) << 16) |
                  (str.charCodeAt(i++) << 8)  |
                  (str.charCodeAt(i++));

            // Read exactly 'len' characters
            const word = str.substring(i, i + len);
            result.push(word);
            i += len;
        }

        return result;
    }
}