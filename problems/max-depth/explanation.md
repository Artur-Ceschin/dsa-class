** Problema: Maximum Depth of Binary Tree**

Dada a raiz de uma árvore binária, retorne sua profundidade máxima (número de nós no caminho mais longo da raiz até uma folha).

```
Exemplo 1:
    3
   / \
  9  20
    /  \
   15   7

Output: 3

Exemplo 2:
    1
     \
      2

Output: 2
```

---

Como eu desenvolvi:

Para resolver esse problema devemos pensar simples, e normalmente quando se trata de arvores devemos tentar uma recursão

a primeira coisa que testamos é se root ou seja o valor atual é nulo ou não
E entao fazemos uma recursao entre o lado esquerdo e direto, e como a funcao retorna o valor do maior node seja o da esquerda ou o da direita o + 1 representa apenas o nó atual que sera retornado

O que acontece é que, quando o nó entra na call stack e chega a um filho nulo, ele retorna 0. Então o nó atual calcula 1 +
Math.max(esquerda, direita) e retorna esse valor para quem o chamou. Isso se repete até que todos os nós sejam processados, e
o resultado final é a profundidade do lado com mais nós, somada ao nó raiz.
