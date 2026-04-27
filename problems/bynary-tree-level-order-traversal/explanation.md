Próximo: Binary Tree Level Order Traversal (LeetCode 102).

O problema: dado o root de uma árvore binária, retorne os valores dos nós agrupados por nível.

Exemplo:  
 3  
 / \
 9 20  
 / \
 15 7  
 Saída: [[3], [9, 20], [15, 7]]

Vamos usar um Breath first Search, que usa queue para processar nós por nível ao invés de descer
tudo de uma vez

Solução
A primeira pergunta que fazemos é: precisamos ir nível a nível ou mergulhar fundo na árvore? Como queremos processar nó por nó
em cada nível, usamos BFS (Breadth-First Search) — ao contrário do DFS, que mergulha até as folhas antes de voltar.

Em BFS sempre usamos uma Queue (fila), onde o primeiro nó a entrar é o primeiro a sair (FIFO).

Iniciamos a queue com a raiz. Enquanto a queue não estiver vazia, processamos um nível inteiro por vez: salvamos o tamanho  
 atual da queue antes de começar o loop interno — isso é essencial, porque dentro do loop adicionamos os filhos à queue, e sem
esse tamanho fixo não saberíamos onde termina o nível atual e começa o próximo.

Para cada nó do nível atual, pegamos seu valor e adicionamos seus filhos à queue. Ao final do loop interno, adicionamos os  
 valores daquele nível ao resultado.

Time complexity: O(n) — cada nó é visitado exatamente uma vez.  
 Space complexity: O(n) — tanto o result quanto a queue crescem proporcionalmente a n. No pior caso, o último nível de uma
árvore balanceada tem n/2 nós na queue ao mesmo tempo.
