/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    // If input is null/empty graph → return null
    if (!node) return null;

    // Map: original node → cloned node
    const visited = new Map();

    // Helper function that does the actual cloning (DFS)
    function dfs(original) {
        // If we already cloned this node → return the clone
        if (visited.has(original)) {
            return visited.get(original);
        }

        // Create new node with same value, but empty neighbors for now
        const clone = new Node(original.val);

        // Save it in map BEFORE recursing (important to handle cycles)
        visited.set(original, clone);

        // Clone all neighbors recursively
        for (const neighbor of original.neighbors) {
            const clonedNeighbor = dfs(neighbor);
            clone.neighbors.push(clonedNeighbor);
        }

        return clone;
    }

    // Start cloning from the given node
    return dfs(node);
};