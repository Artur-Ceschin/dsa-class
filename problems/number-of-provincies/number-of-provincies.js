
function numberOfProvinces(graph) {
  let connectedProvinces = 0

  const row = graph.length
  const col = graph[0].length

  const visited = new Set()

  for(let i = 0; i < graph.length; i++) {
    if(!visited.has(i)) {
      connectedProvinces++
      getConnectedProvince(i)
    }
  }

  function getConnectedProvince(i) {
    visited.add(i)

    for(let j = 0; j < graph[i].length; j++) {

      const current = graph[i][j]
      if(!visited.has(j) && current === 1) {
        visited.add(j)
        getConnectedProvince(j)
      }
    }
  }

  return connectedProvinces
}


  const graph = [                                                                                       
    [1,1,0],
    [1,1,0],                                                                                            
    [0,0,1]            
  ] 
console.log(numberOfProvinces(graph))