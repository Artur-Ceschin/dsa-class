

function twoSum(nums, target) {

  const mappedNumbers = new Map() 

  for(let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if(mappedNumbers.has(complement)) {
      return [i, mappedNumbers.get(complement)]
    }

     mappedNumbers.set(nums[i], i)
  }

  return []
}


const nums = [2, 7, 11, 15]
const target = 9

console.log(twoSum(nums, target))