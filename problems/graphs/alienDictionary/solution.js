

  // Dado um array de palavras e uma ordem do alfabeto alienígena, verifique se as palavras 
  // estão ordenadas lexicograficamente nessa ordem.

  // words = ["hello","uber"], order = "huabcdefgijklmnopqrstvwxyz"
  // Output: true

  // words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
  // Output: false



function alienDictionary(words, order){

  const chart = new Map() 

  for(let i = 0; i < order.length; i++) {
    chart.set(order[i], i)
  }


  for(let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i]
    const nextWord = words[i + 1]

    for(let j = 0; j < words[i].length; j++) {

      if(nextWord[j] === undefined) return false

      if(currentWord[j] !== nextWord[j]) {
       if(chart.get(currentWord[j]) > chart.get(nextWord[j])) return false
       break
      }
    }
  }

  return true

}


//words sao as nossas palabras e order é o alfabeto alienigena, o objeto 

const words = ["word","world","row"]
const order = "worldabcefghijkmnpqstuvxyz"


console.log(alienDictionary(words, order))