LeetCode 133 — Clone Graph

Dado um nó de um grafo conectado não direcionado, retorne uma cópia profunda (deep copy) do grafo.
constructor(val) {
this.val = val
this.neighbors = []
}

Exemplo:

Input: node1 (val=1, neighbors=[node2, node4])
node2 (val=2, neighbors=[node1, node3])
node3 (val=3, neighbors=[node2, node4])
node4 (val=4, neighbors=[node1, node3])

Output: cópia exata do mesmo grafo, com nós novos na memória

A função recebe o nó de entrada e retorna o nó clonado correspondente.

Solução:

⏺ ---  
 Como resolver o Clone Graph

Não podemos simplesmente retornar o nó original — isso seria retornar a mesma referência na memória, não uma cópia real. Qualquer
mudança no "clone" afetaria o grafo original. Precisamos criar nós novos com as mesmas conexões.

O algoritmo usado é DFS. Partindo do nó de entrada, criamos um clone com new Node(node.val) e registramos no Map visited antes de  
 explorar os vizinhos. Para cada vizinho, chamamos o DFS recursivamente — que retorna o clone desse vizinho — e adicionamos ao
neighbors do clone atual. Se o nó já estiver no Map, retornamos o clone existente diretamente, evitando loops infinitos em grafos com
ciclos.

A complexidade de tempo é O(N) pois visitamos cada nó uma vez. A complexidade de espaço é O(N) pelo Map e pela call stack da  
 recursão.
