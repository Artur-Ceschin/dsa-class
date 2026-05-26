// Number of Enclaves (LeetCode 1020)

//   You are given a binary grid where 1 = land and 0 = water. A cell is an enclave if you cannot walk off
//   the boundary of the grid from that land cell.

//   Return the number of land cells that are enclaves.

//   Input:
//    [
//.   [0,0,0,0],
//    [1,0,1,0],
//    [0,1,1,0],
//.   ]

//   Output: 3
  
//   ---


function numberOfEnclaves(cells) {
  const rows = cells.length
  const columns = cells[0].length

  const positions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  for(let r = 0; r < rows; r++) {
 
    for(let c = 0;c < columns; c++) {

      if(r === 0 || r === rows - 1 || c === 0 || c === columns - 1) {

        if(cells[r][c] === 1) {
          dfs(r, c)
        }
      }
    }
  }

  function dfs(row, col) {

    cells[row][col] = 0
    for(const [dRow, dCol] of positions) {

      const currentRow = row + dRow
      const currentCol = col + dCol

      if(currentRow < 0 || currentRow > rows - 1 || currentCol < 0 || currentCol > columns - 1) {
        continue
      }

      if(cells[currentRow][currentCol] === 1) {
        dfs(currentRow, currentCol)
      }
    }
  }

  let result = 0
  for(let r = 0; r < rows; r++) {
 
    for(let c = 0;c < columns; c++) {
      if(cells[r][c] === 1) {
        result++

      }
    }
  }

  return result
}

//DFS vs BFS

const cells = 
  [
    [0,0,0,0],
    [1,0,1,0],
    [0,1,1,0],
    [0,0,0,0]
  ]



console.log(numberOfEnclaves(cells))