
function diameterBinaryTree(root) {

  let maxDiameter = 0

  function depth(node) {

    if(node === null) return 0

    const left = depth(node.left)
    const right = depth(node.right)

    maxDiameter = Math.max(maxDiameter, left + right)

    return 1 + Math.max(left, right)
  }


  depth(root)


  return maxDiameter

}