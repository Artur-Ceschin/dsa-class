// Subsets (LeetCode 78)

//   Given an array of distinct integers nums, return all possible subsets (the power set).

//   Input:  nums = [1, 2, 3]
//   Output: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]


function subsets(nums) {
  const result = []
  function backtrack(index, path) {
    console.log('entrei com path=', [...path])
    result.push([...path])
    console.log('result', result)
    for(let i = index; i < nums.length; i++) {

      path.push(nums[i])
      console.log('Antes de entrar no backtrack', i + 1, path)
      backtrack(i + 1, path)
      path.pop()
      console.log('após pop, path=', [...path])
    }

  }
  backtrack(0, [])
  return result
}


const nums = [1, 2, 3]

console.log(subsets(nums))