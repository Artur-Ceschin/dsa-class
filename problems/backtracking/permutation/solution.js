function permutation(nums) {
  const result = []

  function backtrack(path) {

    if(nums.length === path.length) {

      result.push([...path])
      return
    }
    for(let i = 0; i < nums.length; i++) {

      if(path.includes(nums[i])) {
        continue
      }

      path.push(nums[i])
      backtrack(path)
      path.pop()
    }
  }

  backtrack([])

  return result

}


const nums = [1, 2, 3]

console.log(permutation(nums))