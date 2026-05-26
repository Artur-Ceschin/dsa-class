
// ⏺ House Robber III (LeetCode 337)

//   É o mesmo conceito do House Robber que você já resolveu — não pode roubar duas casas adjacentes —
//   mas agora as casas estão organizadas em uma árvore binária.

//       3
//      / \
//     2   3
//      \   \
//       3   1
//   Output: 7 → roubar nós 3, 3, 1

class Node {

  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinaryTree {

  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)

    if(this.root === null) {
      this.root = newNode
    } else {
      this.insertAtTree(this.root, newNode)
    }
  }

  insertAtTree(curr, newNode) {

    if(newNode.val < curr.val) {
      if(curr.left === null) {
        curr.left = newNode
      } else {
        this.insertAtTree(curr.left, newNode)
      }
    } else {
      if(curr.right === null) {
        curr.right = newNode
      } else {
        this.insertAtTree(curr.right, newNode)
      }
    }
  }
}


function RobHouse(head) {

  function dfs(node) {
    if(node === null) {
      return [0, 0]
    }
    
    const left = dfs(node.left)
    const right = dfs(node.right)

    const rob = node.val + left[1] + right[1]
    const notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    

    return [rob, notRob]
  }

  const result = dfs(head)

  return Math.max(result[0], result[1])
}


  const root = new Node(3)      // nó raiz
  root.left = new Node(2)       // filho esquerdo da raiz
  root.right = new Node(3)      // filho direito da raiz
  root.left.right = new Node(3) // filho direito do nó 2
  root.right.right = new Node(1)// filho direito do nó 3



console.log(RobHouse(root))
