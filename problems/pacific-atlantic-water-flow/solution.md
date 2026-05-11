LeetCode 417 — Pacific Atlantic Water Flow

Você tem uma matriz de inteiros representando alturas de terreno. A água pode fluir de uma célula para outra se a célula vizinha  
 tiver altura menor ou igual.

- O Oceano Pacífico beira a borda esquerda e superior da matriz
- O Oceano Atlântico beira a borda direita e inferior

Retorne todas as células que conseguem drenar água para ambos os oceanos.

Exemplo:  
heights = [  
 [1, 2, 2, 3, 5],
[3, 2, 3, 4, 4],
[2, 4, 5, 3, 1],  
 [6, 7, 1, 4, 5],
[5, 1, 1, 2, 4]  
]

Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

Solução:
O problema Pacific Atlantic Water Flow é um excelente exercício para praticar BFS, DFS e navegação em matrizes. Além disso, ele introduz um dos conceitos mais importantes em problemas de grafos: mudar a perspectiva da solução.

Temos uma matriz onde cada posição representa a altura de uma determinada região. A água pode fluir para cima, baixo, esquerda e direita, mas apenas para células com altura menor ou igual à atual. Em outras palavras, a água consegue descer ou permanecer no mesmo nível, mas não consegue subir.

O objetivo é descobrir quais células conseguem enviar água tanto para o Oceano Pacífico quanto para o Oceano Atlântico.

O Pacífico toca:

- a primeira linha;
- a primeira coluna.

O Atlântico toca:

- a última linha;
- a última coluna.

À primeira vista, parece natural começar de cada célula e tentar descobrir se ela consegue chegar aos dois oceanos. O problema dessa abordagem é que ela repete muito trabalho desnecessariamente, porque precisaríamos executar BFS ou DFS várias vezes para diferentes posições da matriz.

O insight mais importante do exercício é inverter o raciocínio.

Em vez de perguntar:

> “Essa célula consegue chegar ao oceano?”

Perguntamos:

> “Quais células o oceano consegue alcançar?”

Essa mudança transforma completamente o problema.

Ao invés de começar do centro da matriz, começamos diretamente das bordas dos oceanos:

- o Pacífico começa na parte superior e esquerda;
- o Atlântico começa na parte inferior e direita.

A partir dessas bordas, expandimos para dentro da matriz utilizando BFS ou DFS.

Como estamos fazendo o fluxo reverso da água, a regra da movimentação também muda. Durante a exploração, só podemos visitar vizinhos cuja altura seja maior ou igual à célula atual.

Por exemplo:

```txt id="0jlwpw"
5 -> 3
```

No fluxo normal, a água pode descer de 5 para 3.

Então, no fluxo reverso, podemos fazer:

```txt id="7jlwpx"
3 -> 5
```

Esse detalhe é o coração da solução.

Para armazenar as posições alcançadas, utilizamos dois conjuntos (`Set`):

- um para o Pacífico;
- outro para o Atlântico.

Cada posição visitada é salva em um formato como:

```txt id="tjlwpy"
"2-3"
```

Isso permite verificar rapidamente se uma célula já foi visitada e também facilita encontrar a interseção entre os dois oceanos.

A estrutura do BFS ou DFS segue sempre o mesmo padrão:

1. validar se a posição está dentro da matriz;
2. verificar se ela já foi visitada;
3. marcar a posição como visitada;
4. explorar os vizinhos válidos.

No BFS utilizamos uma fila (`queue`) para explorar as posições em camadas. Já no DFS usamos recursão para explorar um caminho até o máximo possível antes de voltar. Apesar da implementação mudar, a lógica principal permanece exatamente a mesma.

Depois de executar a exploração para os dois oceanos, teremos dois conjuntos:

- todas as posições alcançadas pelo Pacífico;
- todas as posições alcançadas pelo Atlântico.

O resultado final do problema é simplesmente a interseção desses conjuntos. Se uma posição aparece nos dois, significa que a água daquela célula consegue chegar aos dois oceanos.

A solução é bastante eficiente. Cada célula é visitada no máximo duas vezes: uma pelo Pacífico e outra pelo Atlântico. Por isso, a complexidade de tempo é:

O(m \times n)

E a complexidade de espaço também é:

O(m \times n)

Esse problema é extremamente importante porque ensina padrões fundamentais utilizados em diversos exercícios de entrevistas técnicas, especialmente problemas envolvendo:

- BFS;
- DFS;
- grafos;
- grid traversal;
- flood fill;
- shortest path;
- ilhas e regiões conectadas.
