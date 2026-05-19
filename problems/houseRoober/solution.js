  // ▎ House Robber
  // ▎
  // ▎ Dado um array de casas com valores, você não pode roubar duas casas adjacentes. Retorna o valor 
  // ▎ máximo que você pode roubar.
  // ▎
  // ▎ [2, 7, 9, 3, 1] → 12 (2 + 9 + 1)
  // ▎ [2, 1, 1, 2] → 4 (2 + 2)
function BiancasHouses(houses) {

  const dp = Array.from({ length: houses.length })

  dp[0] = houses[0]
  dp[1] = Math.max(houses[0], houses[1])

  
  for(let i = 2; i < houses.length; i++) {
    dp[i] = Math.max(dp[i - 1], houses[i] + dp[i - 2])
  }

  console.log(dp)

  return dp[houses.length - 1]
}

const houses = [4, 6, 7, 8, 99, 12]


console.log(BiancasHouses(houses))