
//receive an array and return an array
function pacificAtlanticWaterFlow(ocean) {
  const result = []

  const positions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  //we need to take all the oceans from atlantic and from pacific for that we will
  //need to create

  const { pacificEdges, atlanticEdges } = populateEdges(ocean)

  //now we have the logic we will go with BFS since need to explre its neighbours

  const pacific = new Set() 
  const atlantic = new Set()

  function bfs(visited, edges) {

    const queue = [...edges]
    
    while(queue.length > 0) {
      const [currentRow, currentCol] = queue.shift()

      if(visited.has(`${currentRow}-${currentCol}`)) continue

      visited.add(`${currentRow}-${currentCol}`)
      //neighbours logic
      for(const position of positions) {
        const [positionRow, positionCol] = position
        const nextRow = currentRow + positionRow
        const nextCol = currentCol + positionCol
        if(
            nextRow < 0 ||
            nextRow >= ocean.length ||
            nextCol < 0 ||
            nextCol >= ocean[0].length
          ) {
            //found a value that has passed trought the entire port
            continue
          }

        if(visited.has(`${nextRow}-${nextCol}`)) continue


        if(ocean[nextRow][nextCol] >= ocean[currentRow][currentCol]) {
            //if worth exploring that is the way
          queue.push([nextRow, nextCol])
        }
      }
    }
  }

  bfs(pacific, pacificEdges)
  bfs(atlantic, atlanticEdges)


  for(const indexes of pacific) {

    const [r, c] = indexes.split('-')

    if(atlantic.has(`${r}-${c}`)) {
      result.push([Number(r), Number(c)])
    }
  }

  return result

}


 heights = [  
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],  
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]  
 ]

 

// console.log(pacificAtlanticWaterFlow(heights))


function pacificAtlanticWaterFlowDFS(ocean) {
  const result = []

  const positions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  //we need to take all the oceans from atlantic and from pacific for that we will
  //need to create

  const { 
    pacificEdges,
    atlanticEdges
   } = populateEdges(ocean)

  //now we have the logic we will go with BFS since need to explre its neighbours
  const pacific = new Set() 
  const atlantic = new Set()

  function dfs(row, col, visited) {

    if(visited.has(`${row}-${col}`)) return
    visited.add(`${row}-${col}`)    

    for(const position of positions) {


      const [dRow, dCol] = position

      const nextRow = row + dRow
      const nextCol = col + dCol


      if(nextRow < 0 || nextRow >= ocean.length || nextCol < 0 || nextCol >= ocean[0].length) {
        continue
      }

      if(visited.has(`${nextRow}-${nextCol}`)) continue


      if(ocean[nextRow][nextCol] >= ocean[row][col]) {
        dfs(nextRow, nextCol, visited)
      }
    }

  }

  for(let i = 0; i < pacificEdges.length; i++) {
    dfs(pacificEdges[i][0], pacificEdges[i][1], pacific)
  }

  for(let i = 0; i < atlanticEdges.length; i++) {
      dfs(atlanticEdges[i][0], atlanticEdges[i][1], atlantic)
  }

  for(const indexes of pacific) {

    const [r, c] = indexes.split('-')

    if(atlantic.has(`${r}-${c}`)) {
      result.push([Number(r), Number(c)])
    }
  }

  return result
}

function populateEdges(ocean) {
  const pacificEdges = []
  for(let row = 0; row < ocean.length; row++) {
    pacificEdges.push([row, 0])
  }

  for(let col = 1; col < ocean[0].length; col++) {
    pacificEdges.push([0, col])
  }

  const atlanticEdges = []
  for(let row = 0; row < ocean.length - 1; row++) {
    atlanticEdges.push([row, ocean[0].length - 1])
  }

  for(let col = 1; col < ocean[0].length; col++) {
    atlanticEdges.push([ocean.length - 1, col])
  }

  return { pacificEdges, atlanticEdges }
}


console.log(pacificAtlanticWaterFlowDFS(heights))
A