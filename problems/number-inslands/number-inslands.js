


function numberOfIslands(grid) {

  let result = 0

  const rows = grid.length
  const columns = grid[0].length



  for(let r = 0; r < rows; r++) {
    for(let col = 0; col < columns; col++) {
      const current = grid[r][col]
      if(current === "1") {
        dfs(grid, r, col)

        result++
      }
    }
  }

  function dfs(grid, r, col) {
    if(r < 0 || r >= rows || col < 0 || col >= columns) return

    if(grid[r][col] === "0") return

    grid[r][col] = "0"
    
    dfs(grid, r - 1, col)

    dfs(grid, r + 1, col)

    dfs(grid, r, col + 1)

    dfs(grid, r, col - 1)
  }

  return result
}
