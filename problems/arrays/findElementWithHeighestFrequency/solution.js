// Find Element with Highest Frequency

//   Dado um array de inteiros, encontre o elemento que mais se repete. Se múltiplos elementos
//   aparecerem igualmente, retorne qualquer um deles.

//   Input:  [1, 3, 3, 2, 1, 1, 4]
//   Output: 1  (aparece 3 vezes)
  
//   Input:  [5, 5, 2, 2, 8]
//   Output: 5 ou 2  (ambos aparecem 2 vezes)

function findElementWithHighestFrequency(arr) {

  if(!arr.length) return -1

  const map = new Map()

  for(const num of arr) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  let maxValue = 0
  let maxFrequency = 0
  for(const [key, value] of map) {
    if(value > maxValue) {
      maxValue = value
      maxFrequency = key
    }
  }

  return maxFrequency
}


const arr = [1, 3, 3, 2, 1, 1, 4]
console.log(findElementWithHighestFrequency(arr))