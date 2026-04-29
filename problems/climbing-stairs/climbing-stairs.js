function climbingStairs(n) {
  const map = new Map()

  function recursiveCall(num) {
    if(num === 1 || num === 2) {
      return num
    }

    if(map.get(num)) {
      return map.get(num)
    } else {
      const result1 = recursiveCall(num - 1)
      const result2 = recursiveCall(num - 2)

      const total =  result1 + result2

      map.set(num, total)

      return total
    }
  }
  return recursiveCall(n)
}


console.log(climbingStairs(4))