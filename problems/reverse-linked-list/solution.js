class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  append(value) {
    const newNode = new Node(value)

    if(!this.head) {
      this.head = newNode
    } else { 
      let current = this.head
      while(current.next !== null) {
        current = current.next
      }

      current.next = newNode

      this.size++
    }
  }
}

const node1 = new LinkedList()
node1.append(1)
node1.append(2)
node1.append(3)
node1.append(4)

function reverseLinkedList(list) {
  let next = null
  let current = list
  let prev = null

  while(current !== null) {
    next = current.next
    current.next = prev
    prev = current, current = next
  }
  
  return prev
}
//1 → 2 → 3
//2 -> 1 -> 3
//2 -> 3 -> 1
//3 → 2 → 1
console.log(reverseLinkedList(node1.head))