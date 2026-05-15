
function courseSchedule(prerequisites, numCourses) {
  const courses = createCoursesRelation(prerequisites, numCourses)
  const visiting = new Set()
  const visited = new Set() 
  let hasCycle = false

  for(let i = 0; i < courses.length; i++) {
    dfs(i, courses)
  }

  function dfs(course, courses) {

    if(visiting.has(course)) return true
    if(visited.has(course)) return false

    visiting.add(course)

    for(let i = 0; i < courses[course].length; i++) {
      const result = dfs(courses[course][i], courses)

      if(result === true) {
        return hasCycle = true
      }
    }
    visiting.delete(course)
    visited.add(course)
  }

  return !hasCycle
}

function createCoursesRelation(prerequisites, numCourses) {
  const courses = Array.from({ length: numCourses}, () => [])
  for(let i = 0; i < prerequisites.length; i++) {
    const current = prerequisites[i]
    courses[current[1]].push(prerequisites[i][0])
  }
  return courses
}


function courseSchedule2(prerequisites, numCourses) {

  const visited = new Set()
  const visiting = new Set()

  // const positions 

  //we need to create an adjancet list for sure

  const list = createAdjacencyList(prerequisites, numCourses)

  for(let i = 0; i < numCourses; i++) {
    if(dfs(i) === false) return false
  }

  function dfs(course) {
    if(visiting.has(course)) return false
    if(visited.has(course)) return true

    visiting.add(course)
    for(const neighbor of list[course]) {

      if(dfs(neighbor) === false) {
        return false
      }
    }
    visiting.delete(course)
    visited.add(course)
    return true
  }

  return true
}

function createAdjacencyList(prerequisites, numCourses) {

  const adjacency = Array.from({length: numCourses}, () => [])

  for(let i = 0; i < prerequisites.length; i++) {
    
    const [course, preq] = prerequisites[i]
    adjacency[preq].push(course)
  }

  return adjacency
}

// const prerequisites = [[1,0]]                                                                                                   
// const numCourses = 2

const numCourses = 4

const prerequisites = [
  [1,0],
  [1,2],
  [3,1],
  [3,2]
]


console.log(courseSchedule2(prerequisites, numCourses))