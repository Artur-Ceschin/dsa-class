// Combination Sum (LeetCode 39)
  
//   Given an array of distinct integers candidates and a target integer target, return all
//   unique combinations of candidates where the chosen numbers sum to target. The same number
//   may be chosen from candidates an unlimited number of times.

//   Example:
//   Input:  candidates = [2, 3, 6, 7], target = 7
//   Output: [[2,2,3], [7]]

//   Input:  candidates = [2,3,5], target = 8
//   Output: [[2,2,2,2], [2,3,3], [3,5]]


function combinationSum(candidates, target) {

  const result = []
  // candidates.sort()
  
  function backtrack(start, path, remaining) {

    if(remaining === 0) {
      result.push(...path)
      return 
    }

    for(let i = start; i < candidates.length; i++) {

      if(candidates[i] > remaining) {
        return
      }

      path.push(candidates[i])
      backtrack(i, path, remaining - candidates[i])
      path.pop()
    }
  }

  backtrack(0, [], target)

  return result
}

const candidates = [2,3,6,7]
const target = 7

console.log(combinationSum(candidates, target))