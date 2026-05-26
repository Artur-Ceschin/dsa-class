


function SearchRotatedSortedArray(array, target) {
  
  let mid = Math.floor(array.length / 2)
  let left = 0
  let right = array.length - 1

  while(left <= right) {

    const current = array[mid]

    if(current === target) {
      return mid
    }

    //ordened left 
    if(current >= array[left]) {

      if(array[left] <= target && target < array[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
        
    } else {
      if(array[right] >= target && target > array[mid]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    mid = Math.floor((left + right) / 2)
  }

  return -1

}


[4, 5, 6, 7, 8, 9]
//l             //r
const array = [4, 5, 6, 7, 0, 1, 2]
const target = 0
//expected : 4

console.log(SearchRotatedSortedArray([4,5,6,7,0,1,2], 3))