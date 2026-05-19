// Coin Change
//   ▎
//   ▎ Dado um array de moedas e um amount, retorna o menor número de moedas necessário para atingir o 
//   ▎ amount. Se não for possível, retorna -1.
//   ▎
//   ▎ coins = [1, 5, 10, 12, 34, 555], amount = 11 → 2 (10 + 1)
//   ▎ coins = [2], amount = 3 → -1

function coinChange(coins, amount) {

 const dp = Array.from({length: amount + 1}, () => (amount + 1))
 dp[0] = 0
 //[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
 
 for(let i = 0; i < amount + 1; i++) {

   for(let j = 0; j < coins.length; j++) {
    const coin = coins[j]
     if(coin <= i) {
       dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  //[0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
 return dp[amount] === amount + 1 ? -1 : dp[amount]
}


const coins1 = [1, 5, 10]
const total1 = 11

const coins2 = [2]
const total2 = 3

console.log(coinChange(coins2, total2))