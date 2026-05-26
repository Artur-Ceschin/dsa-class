Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Solução:

O que acontece aqui é o seguinte primeiro vamos entender o que é um diâmetro, o diâmetro nesse caso é o valor máximo de um node ate o mais longe, enão para o exemplo abaixo o nó mais longe seria do
1  
 /  
 2  
 / \  
 3 4
/ \
 5 6

1 → 2 → 3 → 5 = tem 4 nós
5 → 3 → 2 → 4 = também tem 4 nós
Mas 5 → 3 → 2 → 4 não passa pela raiz 1 — e tem o mesmo tamanho. Agora imagina se a árvore fosse maior abaixo do 3. O caminho que não passa pela raiz poderia ser maior.

Então a conclusão é: em cada nó, você precisa calcular profundidade(esquerda) + profundidade(direita) + 1 e guardar o maior valor encontrado em qualquer nó da árvore.

Ou seja sempre que entramos no depth nós estamos retornando o quantidade de nós que o depth retorna a profundidade da subárvore, e como efeito colateral atualiza o maior diâmetro encontrado e quando a callstack volta com o valor dos seus nós filhos nós vamos somando e coparnaando qual lado tem um a maior profundidade que apartir da ai vemos qual tem o maior caminho encontrado em qualquer nó da árvore
