
// function courseSchedule(prerequisites, numCourses) {
//   const courses = createCoursesRelation(prerequisites, numCourses)
//   const visiting = new Set()
//   const visited = new Set() 
//   let hasCycle = false

//   for(let i = 0; i < courses.length; i++) {
//     dfs(i, courses)
//   }

//   function dfs(course, courses) {

//     if(visiting.has(course)) return true
//     if(visited.has(course)) return false

//     visiting.add(course)

//     for(let i = 0; i < courses[course].length; i++) {
//       const result = dfs(courses[course][i], courses)

//       if(result === true) {
//         return hasCycle = true
//       }
//     }
//     visiting.delete(course)
//     visited.add(course)
//   }

//   return !hasCycle
// }

// function createCoursesRelation(prerequisites, numCourses) {
//   const courses = Array.from({ length: numCourses}, () => [])
//   for(let i = 0; i < prerequisites.length; i++) {
//     const current = prerequisites[i]
//     courses[current[1]].push(prerequisites[i][0])
//   }
//   return courses
// }


// function courseSchedule2(prerequisites, numCourses) {

//   const visited = new Set()
//   const visiting = new Set()

//   const list = createAdjacencyList(prerequisites, numCourses)

//   console.log('list', list)

//   for(let i = 0; i < numCourses; i++) {
//     if(dfs(i) === false) return false
//   }

//   function dfs(course) {
//     if(visiting.has(course)) return false
//     if(visited.has(course)) return true

//     visiting.add(course)
//     for(const neighbor of list[course]) {

//       if(dfs(neighbor) === false) {
//         return false
//       }
//     }
//     visiting.delete(course)
//     visited.add(course)
//     return true
//   }

//   return true
// }

// function createAdjacencyList(prerequisites, numCourses) {

//   const adjacency = Array.from({length: numCourses}, () => [])
//   // [[], [], [], []]

//   for(let i = 0; i < prerequisites.length; i++) {
    
//     const [course, preq] = prerequisites[i]
//     adjacency[preq].push(course)
//   }

//   return adjacency
// }




// const prerequisites = [[1,0]]                                                                                                   
// const numCourses = 2


function courseSchedule(prerequisites, numCourses) {
  const visited = new Set()
  const visiting = new Set()

  const list = createAdjacentList(prerequisites, numCourses)

  for(let i = 0; i < list.length; i++) {
    if(dfs(i) === false) return false
  }

  function dfs(course) {

    if(visiting.has(course)) return false
    
    visiting.add(course)
    
    for(let i = 0; i < list[course].length; i++) {
      if(visited.has(list[course][i])) continue
      if(dfs(list[course][i]) === false) return false
    }
    
    
    visited.add(course)
    visiting.delete(course)

    return true

  }

  return true
}

function createAdjacentList(prerequisites, numCourses) {

  const list = Array.from({length:numCourses }, () => [])

  for(let i = 0; i < prerequisites.length; i++) {
    const [course, prerequisite] = prerequisites[i]
    list[prerequisite].push(course)
  }

  return list
}

const numCourses = 2

const prerequisites = [
  [1,0],
  [1,2],
  [3,2],
  [1,3],  

  // [3,2]
  // [2,3]
  // [1, 0],
  // [0, 1]
]

//[a, b] significa "para fazer a, você precisa ter feito b" .
//1 -> 0, 2 -> 1, 1 -> 2
// 0: [1],
// 1: [2]
// 2: [1]




console.log(courseSchedule([[1,0],[0,1]], numCourses))