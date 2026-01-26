// Problem: Rotten Oranges (LeetCode 994)

// You have a grid representing a box of oranges:
// - 0 = empty cell
// - 1 = fresh orange
// - 2 = rotten orange

// Every minute, rotten oranges infect adjacent fresh oranges
// (up, down, left, right).

// Question: How many minutes until ALL oranges are rotten?
// If impossible, return -1.

const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
];


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

console.log(orangesRotting(grid))