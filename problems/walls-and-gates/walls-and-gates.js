




function wallsAndGates(grid) {

  const rows = grid.length
  const column = grid[0].length
  const queue = []

  const positions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < column; c++) {
      const current = grid[r][c]

      if(current === 0) {
        queue.push([r, c])
      }
    }
  }


  while(queue.length > 0) {
    const [row, col] = queue.shift()
    for(const [dRow, dCol] of positions) {

      const nextRow = row + dRow
      const nextCol = col + dCol

      if(nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= column) continue

      const current = grid[nextRow][nextCol]

      if(current === "INF") {
        queue.push([nextRow, nextCol])
        grid[nextRow][nextCol] = grid[row][col] + 1
      }
    }

  }

  return grid

}



const input = [
  ["INF", -1, 0, "INF"],
  ["INF", "INF", "INF", -1],
  ["INF", -1, "INF", -1],
  [0, -1, "INF", "INF"]
]

console.log(wallsAndGates(input))


//expected result:
// [
//   [3, -1, 0, 1],
//   [2, 2, 1, -1],
//   [1, -1, 2, -1],
//   [0, -1, 3, 4]
// ]