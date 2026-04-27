# Daily Algo

A personal study repository for algorithm and data structure problems. Each problem includes a working solution and a detailed explanation of the reasoning behind it.

## How to Use

```bash
# Run a solution
node problems/<problem-folder>/solution.js

# Run with live reload
node --watch problems/<problem-folder>/solution.js
```

No test framework needed — test cases are written inline at the bottom of each file.

---

## Problems

| #   | Problem                                                                 | Pattern            | Difficulty |
| --- | ----------------------------------------------------------------------- | ------------------ | ---------- |
| 1   | [Maximum Depth of Binary Tree](#maximum-depth-of-binary-tree)           | DFS / Recursion    | Easy       |
| 2   | [Diameter of Binary Tree](#diameter-of-binary-tree)                     | DFS / Recursion    | Easy       |
| 3   | [Rotten Oranges](#rotten-oranges)                                       | BFS / Multi-source | Medium     |
| 4   | [Binary Tree Level Order Traversal](#binary-tree-level-order-traversal) | BFS                | Medium     |

---

## Maximum Depth of Binary Tree

**LeetCode 104** · DFS · Easy

Given the root of a binary tree, return its maximum depth — the number of nodes along the longest path from root to leaf.

```
    3
   / \
  9  20
    /  \
   15   7

Output: 3
```

**Core idea:** Recurse left and right. When you hit `null`, return `0`. Each node returns `1 + max(left, right)`.

- **Time:** O(n) — visits every node once
- **Space:** O(h) — call stack depth equals tree height

[Solution](problems/max-depth/max-depth.js) · [Explanation](problems/max-depth/explanation.md)

---

## Diameter of Binary Tree

**LeetCode 543** · DFS · Easy

The diameter is the longest path between any two nodes. The path does not need to pass through the root.

```
      1
     / \
    2   3
   / \
  4   5

Output: 3  (path: 4 → 2 → 5, or 4 → 2 → 1 → 3)
```

**Core idea:** At every node, the longest path passing through it is `depth(left) + depth(right)`. Use a closure variable to track the global maximum across all nodes.

This is [Max Depth](#maximum-depth-of-binary-tree) extended — the `depth` function is identical, but now you record a side-effect at each node.

- **Time:** O(n)
- **Space:** O(h)

[Solution](problems/diameter-binary-tree/diameter-binary-tree.js) · [Explanation](problems/diameter-binary-tree/expanation.md)

---

## Rotten Oranges

**LeetCode 994** · BFS / Multi-source · Medium

Grid of `0` (empty), `1` (fresh), `2` (rotten). Every minute, rotten oranges infect adjacent fresh ones. Return the number of minutes until all oranges are rotten, or `-1` if impossible.

```
[2, 1, 1]
[1, 1, 0]    →    4 minutes
[0, 1, 1]
```

**Core idea:** Multi-source BFS — add all initially rotten oranges to the queue at once. Each BFS level = 1 minute. Count fresh oranges upfront; decrement as they get infected. If any remain after BFS, return `-1`.

- **Time:** O(m × n)
- **Space:** O(m × n)

[Solution](problems/rotten-oranges-994/solution.js) · [Explanation](problems/rotten-oranges-994/explanation.md)

---

## Binary Tree Level Order Traversal

**LeetCode 102** · BFS · Medium

Return the values of a binary tree grouped by level.

```
    3
   / \
  9  20
    /  \
   15   7

Output: [[3], [9, 20], [15, 7]]
```

**Core idea:** BFS with a queue. At the start of each level, snapshot `queue.length` — that tells you exactly how many nodes belong to the current level. Use an inner loop to process only those nodes, collect their values, and enqueue their children. The children belong to the next level and will be counted separately.

This uses the same BFS skeleton as [Rotten Oranges](#rotten-oranges) — the `queueLength` trick is identical.

- **Time:** O(n)
- **Space:** O(n) — queue holds up to n/2 nodes at the last level

[Solution](problems/binary-tree-level-order/solution.js) · [Explanation](problems/binary-tree-level-order/explanation.md)

---

## Patterns Reference

| Pattern                  | Problems                              |
| ------------------------ | ------------------------------------- |
| DFS / Recursion          | Max Depth, Diameter                   |
| BFS                      | Rotten Oranges, Level Order Traversal |
| Multi-source BFS         | Rotten Oranges                        |
| Closure for global state | Diameter                              |
