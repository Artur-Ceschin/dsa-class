
//  Dado o head de uma linked list, retorna true se ela tem um ciclo (algum nó aponta de volta para 
//   um nó anterior), false se não tem.


class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {

  constructor() {
    this.head = null
    this.size = 0
  }

  append(val) {

    const node = new Node(val)

    if(!this.head) {
      this.head = node
    } else {
      let current = this.head
      while(current.next !== null) {
        current = current.next
      }

      current.next = node
      this.size++
    }

  }
}


const node = new LinkedList()
node.append(1)
node.append(2)
node.append(3)
node.append(4)

 
// node.head.next.next.next = node.head.next

function linkedListCycleDetection(head) {
  let slow = head
  let fast = head

  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if(fast === slow) {
      return true
    }
  }

  return false

}


console.log(linkedListCycleDetection(node.head))