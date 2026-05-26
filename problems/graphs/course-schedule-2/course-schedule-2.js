



function numCourseSchedule2(numCourses, prerequisites) {
  const result = []
  const visiting = new Set()
  const visited = new Set()

  const adjacentList = createAdjacentList(numCourses, prerequisites)
  for(let i = 0; i < numCourses; i++) {
   if(dfs(i) === false) {
      return []
   }
  }


  function dfs(course) {
    if(visited.has(course)) return true
    if(visiting.has(course)) return false
    visiting.add(course)
    for(const neighbors of adjacentList[course]) {

      if(dfs(neighbors) === false) {
        return false
      }
    }
    visiting.delete(course)
    result.push(course)
    visited.add(course)

    return true
  }


  return result.reverse()

}


function createAdjacentList(numCourses, prerequisites) {
  const adjacentList = Array.from({ length: numCourses }, () => [])

  for(let i = 0; i < prerequisites.length; i++) {
    const [course, preques] = prerequisites[i]
    adjacentList[preques].push(course)
  }

  return adjacentList
}

const numCourses = 4;
const prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];
// Output: [0, 2, 1, 3];

const adjantExample = [
  [1, 2],
  [3],
  [3],
  []
]

const prerequisites2 = [
  [1, 0],
  [0, 1],
];



console.log('numCourseSchedule2', numCourseSchedule2(numCourses, prerequisites2))