# Rotten Oranges (LeetCode 994)

## Problem Description

You have a grid representing a box of oranges:

- `0` = empty cell
- `1` = fresh orange
- `2` = rotten orange

Every minute, rotten oranges infect adjacent fresh oranges (up, down, left, right).

**Question:** How many minutes until ALL oranges are rotten? If impossible, return `-1`.

## Example Walkthrough

### Initial State (Minute 0)

```
[2, 1, 1]
[1, 1, 0]
[0, 1, 1]
```

```
🤢 🍊 🍊
🍊 🍊 ⬜
⬜ 🍊 🍊
```

**Fresh oranges:** 6
**Rotten oranges:** (0,0)

---

### After Minute 1

```
[2, 2, 1]
[2, 1, 0]
[0, 1, 1]
```

```
🤢 🤢 🍊
🤢 🍊 ⬜
⬜ 🍊 🍊
```

**Fresh oranges:** 4
**Newly rotten:** (0,1), (1,0)

---

### After Minute 2

```
[2, 2, 2]
[2, 2, 0]
[0, 2, 1]
```

```
🤢 🤢 🤢
🤢 🤢 ⬜
⬜ 🤢 🍊
```

**Fresh oranges:** 2
**Newly rotten:** (0,2), (1,1), (2,1)

---

### After Minute 3

```
[2, 2, 2]
[2, 2, 0]
[0, 2, 2]
```

```
🤢 🤢 🤢
🤢 🤢 ⬜
⬜ 🤢 🤢
```

**Fresh oranges:** 0
**Newly rotten:** (2,2)

---

### Result: 4 minutes

## Algorithm Approach

This problem uses **Breadth-First Search (BFS)** with a multi-source approach:

1. **Initialize:** Find all initially rotten oranges and add them to a queue
2. **Count:** Track the number of fresh oranges
3. **BFS:** Process level by level (each level = 1 minute)
   - For each rotten orange, infect adjacent fresh oranges
   - Add newly rotten oranges to the queue
   - Decrement fresh orange count
4. **Check:** If fresh oranges remain after BFS, return `-1`, otherwise return minutes

## Complexity

- **Time:** O(m × n) - visit each cell once
- **Space:** O(m × n) - queue and visited set

## Running the Solution

```bash
node problems/rotten-oranges-994/solution.js
```
