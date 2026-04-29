

//[100, 4, 200, 1, 3, 2]
function longestConsecutiveSequence(nums) {
  const set = new Set(nums)
  let longestSequence = 0
  
  for(let i = 0; i < nums.length; i++) {

    const current = nums[i]

    // {100, 4, 200, 1, 3, 2}
    if(!set.has(current - 1)) {
      
      let length = 1

      while(set.has(current + length)) {
        length++
      }

       longestSequence = Math.max(longestSequence, length)
    }

  }


  return longestSequence
}


const nums = [100, 4, 200, 1, 3, 2]
console.log(longestConsecutiveSequence(nums))