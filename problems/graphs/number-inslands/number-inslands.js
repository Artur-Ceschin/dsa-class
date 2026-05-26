
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


function numberOfIslands2(grid) {
  const positions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  const row = grid.length;
  const column = grid[0].length

  let result = 0


  for(let r = 0; r < row; r++) {
    for(let c = 0; c < column; c++) {
      const current = grid[r][c]
      if(current === "1") {
        bfs(r, c)
      }
    }
  }

function bfs(r, c) {
    const queue = []

    result++

    queue.push([r, c])
    grid[r][c] = "0"
    while(queue.length > 0) {

    const [dRow, dCol] = queue.shift()

    for(const position of positions) {
      const newRow = dRow + position[0]
      const newCol = dCol + position[1]

      if(newRow < 0 || newRow >= row || newCol < 0 || newCol >= column) continue

      if(grid[newRow][newCol] === "1") {
        grid[newRow][newCol] = "0"
        queue.push([newRow, newCol])
      }
    }
  }
}

  //bfs solution




  return result

}


const grid = [  
 ["1","1","0","0","0"],  
 ["1","1","0","0","0"],  
 ["0","0","1","0","0"],
 ["0","0","0","1","1"]  
]  

console.log(numberOfIslands2(grid))



// dfs

  // for(let r = 0; r < row; r++) {
  //   for(let c = 0; c < column; c++) {

  //     const current = grid[r][c]
  //     if(current === "1") {
  //       dfs(r, c)
  //       result++

  //     }      
  //   }
  // }

  // function dfs(r, c) {

  //   for(position of positions) {

  //     const newRow = r + position[0]
  //     const newCol = c + position[1]

  //     if(newRow < 0 || newRow >= row || newCol < 0 || newCol >= column) continue

  //     const current = grid[newRow][newCol]

  //     if(current === "1") {
  //       grid[newRow][newCol] = "0"
  //       dfs(newRow, newCol)
  //     }
  //   }
  // }