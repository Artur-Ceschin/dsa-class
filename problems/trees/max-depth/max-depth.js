function maxDepthBinaryTree(root) {
  if(root === null) {
    return 0
  }

  return 1 + Math.max(maxDepthBinaryTree(root.left), maxDepthBinaryTree(root.right))
}
