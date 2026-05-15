
function longesSubstringWithoutRepeating(word) {
  const substring = new Set()
  let left = 0, right = 0

  let maxSubstring = 0

  while(right < word.length) {

    while(substring.has(word[right])) {
        substring.delete(word[left])
        left++
    }
    substring.add(word[right])
    right++
    maxSubstring = Math.max(maxSubstring, right - left)

  }

  return maxSubstring

}


const string = "abcabcbbyuiolkj"

console.log(longesSubstringWithoutRepeating(string))