


function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  for(let i = 0; i < intervals.length - 1; i++) {

    const start = intervals[i][0]
    const end = intervals[i][1]

    const nextStart = intervals[i + 1][0]
    const nextEnd= intervals[i + 1][1]

    //sobpostion
    if(end >= nextStart) {
      intervals[i] = [start, Math.max(end, nextEnd)]
      intervals.splice(i + 1, 1)
      i--
    }
  }


  return intervals
}


const intervals = [[1,3],[2,6],[8,10],[15,18]]


console.log(mergeIntervals(intervals))