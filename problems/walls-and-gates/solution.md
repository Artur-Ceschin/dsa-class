Walls and Gates (LeetCode graph/grid problem)
Walls and Gates is a popular coding interview problem featured on LeetCode that tests understanding of graph traversal on a grid. The challenge requires filling each empty room in a matrix with its distance to the nearest gate while respecting impassable walls.

Problem setup
The input is a 2D grid where each cell represents:

INF (a large number) – an empty room,

-1 – a wall or obstacle,

0 – a gate.
The task is to replace every INF cell with the shortest distance (in steps) to a gate, or leave it as INF if unreachable.

Solução:
