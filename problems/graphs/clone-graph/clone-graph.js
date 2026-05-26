
class Node {
  constructor(val) {
    this.val = val
    this.neighbors = []
  }
}

const node1 = new Node(1)
const node2 = new Node(2)

node1.neighbors = [node2]
node2.neighbors = [node1]


function cloneGraph(graph) {
  const visited = new Map()

  function dfs(node) {
    if(visited.get(node)) return visited.get(node)
    const nodeClone = new Node(node.val)
    visited.set(node, nodeClone)

    for(let i = 0; i < node.neighbors.length; i++) {
      nodeClone.neighbors.push(dfs(node.neighbors[i]))
    }
    return nodeClone
  }

  return dfs(graph)
}


function cloneGraph2(graph) {
  const clone = new Map()
  function dfs(node) {

    if(clone.has(node)) return clone.get(node)
    const newNode = new Node(node.val)

    clone.set(node, newNode)
      
    for(const neighbor of node.neighbors) {
      const neighborClone = dfs(neighbor)
      newNode.neighbors.push(neighborClone)
    }

    return newNode

  }

  return dfs(graph)
}


console.log(cloneGraph(node1))