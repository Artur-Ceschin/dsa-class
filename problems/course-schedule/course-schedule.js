
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

  const prerequisites = [[1,0]]                                                                                                   
  const numCourses = 2


console.log(courseSchedule(prerequisites, numCourses))