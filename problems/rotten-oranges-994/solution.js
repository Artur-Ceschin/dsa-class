// Problem: Rotten Oranges (LeetCode 994)

// You have a grid representing a box of oranges:
// - 0 = empty cell
// - 1 = fresh orange
// - 2 = rotten orange

// Every minute, rotten oranges infect adjacent fresh oranges
// (up, down, left, right).

// Question: How many minutes until ALL oranges are rotten?
// If impossible, return -1.


const grid2 = [
  [2, 1, 1],
  [0, 0, 0],
  [0, 1, 1]
];


function orangesRotting(grid) {
  const rows = grid.length
  const columns = grid[0].length
  const visited = new Set()
  const queue = []
  let freshOranges = 0

  for(let r = 0; r < rows; r++) {
    for(c = 0; c < columns; c++) {
      const current = grid[r][c]

      if(current === 2) {
        queue.push([r, c])
        visited.add(`${r},${c}`)
      } else if(current === 1) {
        freshOranges++
      }
    }
  }

  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  let minutes = 0

  while(queue.length > 0 && freshOranges > 0) {

    const size = queue.length

    for(let i = 0; i < size; i++) {
      const [row, col] = queue.shift()
      for(const [dr, dc] of directions) {

        const newRow = row + dr
        const newCol = col + dc

        if(newRow >= 0 && newRow < rows &&
          newCol >= 0 && newCol < columns &&
          !visited.has(`${newRow},${newCol}`) &&
          grid[newRow][newCol] === 1
        ){
          visited.add(`${newRow},${newCol}`)
          queue.push([newRow, newCol])
          freshOranges--
        }
      }
    }

    minutes++
  }

  return freshOranges === 0 ? minutes : -1
}

//O(m * n)
//O(m * n)


function orangesRotting2(grid) {

  let minutes = 0


  const positions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  const row = grid.length
  const column = grid[0].length

  const queue = []
  let totalFresh = 0

  
  for(let r = 0; r < row; r++) {

    for(let c = 0; c < column; c++) {
      const current = grid[r][c]

      if(current === 2) {
        queue.push([r, c])
      } else if(current === 1) {
        totalFresh++
      }
    }
  }

  while(queue.length > 0) {
    const size = queue.length
    let infected = false
    for(let i = 0; i < size; i++) {
      const [dRow, dCol] = queue.shift()
        for(const position of positions) {
        const nextRow = dRow + position[0]
        const nextCol = dCol + position[1]

        if(nextRow < 0 || nextRow >= row || nextCol < 0 || nextCol >= column) continue

        const current = grid[nextRow][nextCol]

        if(current === 1) {
          grid[nextRow][nextCol] = 2
          totalFresh--
          queue.push([nextRow, nextCol])
          infected = true
        }
      }
    }

    if(infected) {
      minutes++
    }

    }

  return totalFresh > 0 ? -1 : minutes

}


const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
];


console.log(orangesRotting2(grid))