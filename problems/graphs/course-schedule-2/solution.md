# Course Schedule II

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a, b]` indicates that you must take course `b` before taking course `a`.

Return a valid ordering of courses you can take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses because of a cycle, return an empty array.

### Example 1

```js id="ujlxl9"
Input: numCourses = 2;
prerequisites = [[1, 0]];

Output: [0, 1];
```

Explanation:

```txt id="ujlxla"
To take course 1 you must first take course 0.
```

---

### Example 2

```js id="ujlxlb"
Input: numCourses = 4;
prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

Output: [0, 2, 1, 3];
```

Explanation:

```txt id="ujlxlc"
Course 0 must be completed before 1 and 2.
Courses 1 and 2 must be completed before 3.
```

---

### Example 3

```js id="ujlxld"
Input: numCourses = 2;
prerequisites = [
  [1, 0],
  [0, 1],
];

Output: [];
```

Explanation:

```txt id="ujlxle"
There is a cycle between courses 0 and 1,
so it is impossible to finish all courses.
```
