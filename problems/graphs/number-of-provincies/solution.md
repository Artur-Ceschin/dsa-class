Number of Provinces (LeetCode 547)

You are given an n x n matrix isConnected where isConnected[i][j] = 1 means city i and city j are directly connected, and isConnected[i][j] = 0 means they are not.

A province is a group of directly or indirectly connected cities.

Return the number of provinces.
[1, 1, 0],
[1, 1, 0],
[0, 0, 1]

Output: 2

Cidades 0 e 1 estão conectadas — formam uma província. Cidade 2 está isolada — forma outra.

Solução:
Number of Provinces — Explicação

Para resolver esse problema temos que pensar em termos de grafos. A matriz representa cidades e suas
conexões: se isConnected[i][j] === 1 e i !== j, significa que a cidade i e a cidade j estão
diretamente conectadas.

Fazemos um loop externo por cada cidade i. Para cada uma, verificamos se ela já está no Set de
visitados. Se não estiver, é o início de uma nova província — incrementamos o contador e chamamos a  
 função recursiva passando i.

Dentro da função, adicionamos i ao Set imediatamente e fazemos um loop por todos os j da linha
graph[i]. Se current === 1 e j não estiver no Set, significa que encontramos uma cidade conectada  
 ainda não visitada — adicionamos j ao Set e chamamos a função recursivamente com j. Assim, toda a
província é marcada como visitada antes de voltarmos ao loop externo.

Quando o loop externo chega em uma cidade já visitada, simplesmente ignora. Cidades isoladas, como uma
linha com apenas [0, 0, 1], também geram uma nova província — o loop externo as encontra não
visitadas, incrementa o contador, e a função interna não faz nenhuma recursão pois não há vizinhos
conectados.

Complexidade:

- Tempo: O(n²) — percorremos cada célula da matriz uma vez
- Espaço: O(n) — o Set guarda no máximo n cidades
