Number of Islands (LeetCode 200).

Input: grid = [  
 ["1","1","0","0","0"],  
 ["1","1","0","0","0"],  
 ["0","0","1","0","0"],
["0","0","0","1","1"]  
 ]  
 Output: 3

Dado um grid 2D de "1" (terra) e "0" (água), retorne o número de ilhas. Uma ilha é cercada por água e é formada conectando  
 terras adjacentes horizontalmente ou verticalmente.

Solução:
Como resolver o Number of Islands (LeetCode 200)

Estamos trabalhando com um grid — uma matriz onde cada célula é "1" (terra) ou "0" (água).

Iniciamos dois loops aninhados para percorrer cada célula da matriz e obter o row e col atual. Quando encontramos um "1",  
 chamamos uma função recursiva (DFS) que visita todos os vizinhos adjacentes (cima, baixo, esquerda, direita). Para cada
vizinho que também for "1", a função o marca como "0" — assim evitamos visitar a mesma célula duas vezes e "afundamos" a ilha
conforme a exploramos.

Depois que o DFS termina, toda aquela ilha foi visitada e marcada. Voltamos ao loop principal e incrementamos o contador de  
 ilhas.

Repetimos até percorrer todo o grid.

Complexidade:

- Tempo: O(m × n) — no pior caso, visitamos cada célula uma vez
- Espaço: O(m × n) — a call stack do DFS pode crescer até o tamanho do grid se a ilha ocupar todas as células
