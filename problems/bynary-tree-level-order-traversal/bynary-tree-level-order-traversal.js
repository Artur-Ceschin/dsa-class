
function levelOrder(root) {

  const queue = []

  queue.push(root)
  const result = []


  while(queue.length > 0) {
    let i = 0 

    const queueLength = queue.length
    const currentResult = []

    while(i < queueLength) {
      const current = queue.shift()
      currentResult.push(current.val)

      if(current.left) {
        queue.push(current.left)
      }

      if(current.right) {
        queue.push(current.right)
      }
      
      i++
    }
    
    result.push(currentResult)
  }


  return result
    
};

