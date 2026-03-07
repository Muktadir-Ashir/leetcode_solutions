/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid || grid.length === 0) return 0;

    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    const dfs = (i, j) => {
        // Base case: out of bounds or not land
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== '1') {
            return;
        }

        // Sink this land

        grid[i][j] = '0';

        // Explore neighbores
        dfs(i - 1, j); //up
        dfs(i + 1, j); //down
        dfs(i, j - 1); //left
        dfs(i, j + 1); //right
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
};