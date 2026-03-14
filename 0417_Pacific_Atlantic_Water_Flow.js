/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {

    // ─── Early return if grid is empty or invalid ───────────────────────────────
    if (!heights || !heights.length || !heights[0].length) return [];
    // If heights is null/undefined, or 0 rows, or 0 columns → return empty array

    const m = heights.length;        // number of rows
    const n = heights[0].length;     // number of columns

    // Create two boolean 2D arrays (like maps) to mark reachable cells
    const canReachPacific = Array(m).fill().map(() => Array(n).fill(false));
    const canReachAtlantic = Array(m).fill().map(() => Array(n).fill(false));
    // Every cell starts as false = "cannot reach this ocean yet"

    // ─── Phase 1: Mark everything reachable from Pacific ────────────────────────
    // Start from every cell on the Pacific border (top row + left column)

    // Top row (row 0, all columns)
    for (let c = 0; c < n; c++) {
        dfs(heights, 0, c, canReachPacific);
    }

    // Left column (column 0, all rows) — note we skip [0,0] because already done
    for (let r = 0; r < m; r++) {
        dfs(heights, r, 0, canReachPacific);
    }

    // ─── Phase 2: Mark everything reachable from Atlantic ───────────────────────
    // Bottom row + right column

    // Bottom row (row m-1, all columns)
    for (let c = 0; c < n; c++) {
        dfs(heights, m - 1, c, canReachAtlantic);
    }

    // Right column (column n-1, all rows)
    for (let r = 0; r < m; r++) {
        dfs(heights, r, n - 1, canReachAtlantic);
    }

    // ─── Phase 3: Collect cells that can reach BOTH oceans ──────────────────────
    const result = [];

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            // If this cell was reached from BOTH oceans → add to answer
            if (canReachPacific[r][c] && canReachAtlantic[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
};



// ────────────────────────────────────────────────────────────────────────────────
// Helper function: reverse-flow DFS (from ocean → inland, only uphill or flat)
// ────────────────────────────────────────────────────────────────────────────────
function dfs(heights, r, c, canReach) {
    const m = heights.length;
    const n = heights[0].length;

    // 1. Out of bounds check
    // 2. Already visited (already marked true) → stop
    if (r < 0 || r >= m || c < 0 || c >= n || canReach[r][c]) {
        return;
    }

    // Mark this cell as reachable from this ocean
    canReach[r][c] = true;

    const currentHeight = heights[r][c];

    // Four possible directions: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let [dr, dc] of directions) {
        const nr = r + dr;   // new row
        const nc = c + dc;   // new column

        // Check if new position is inside grid
        if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
            // Very important: we only continue if the NEIGHBOR is ≥ current height
            // (because we're simulating reverse flow: ocean → higher ground)
            if (heights[nr][nc] >= currentHeight) {
                dfs(heights, nr, nc, canReach);
            }
        }
    }
}