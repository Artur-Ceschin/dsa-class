⏺ LeetCode 128 — Longest Consecutive Sequence

Dado um array de inteiros não ordenado, retorne o comprimento da sequência consecutiva mais longa.

Input: [100, 4, 200, 1, 3, 2]  
 Output: 4  
 Reason: a sequência [1, 2, 3, 4] tem comprimento 4

Input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]  
 Output: 9
Reason: a sequência [0, 1, 2, 3, 4, 5, 6, 7, 8] tem comprimento 9

Restrição importante: a solução deve rodar em O(n) — ou seja, ordenar o array não é permitido (seria O(n
log n)).

Solucão:

Como resolver isso?
A ideia principal — e o que mantém essa solução em O(n) — é o uso de um Set. Como o Set armazena valores
únicos e permite busca em O(1), conseguimos verificar a existência de qualquer número em tempo  
 constante.

O raciocínio central é: encontrar o início de cada sequência consecutiva. Fazemos isso verificando se  
 current - 1 existe no set. Se existir, significa que há um número menor que o atual, então ele não é o
início. Só entramos na lógica se current for de fato o menor da sua sequência.

Exemplo com o set {100, 4, 200, 1, 3, 2}:

- 100: 100 - 1 = 99 não está no set → pode ser início. O while verifica 100 + 1 = 101 → não existe.  
  Sequência de tamanho 1.
- 4: 4 - 1 = 3 está no set → não é início. Ignora.
- 200: 200 - 1 = 199 não está no set → pode ser início. 201 não existe. Sequência de tamanho 1.
- 1: 1 - 1 = 0 não está no set → é o início. O while verifica 1 + length enquanto o valor existir no  
  set, incrementando length. Passa por 2, 3 e 4 → sequência de tamanho 4.

Ao final de cada sequência, comparamos length com maxSequence usando Math.max, e retornamos o maior  
 valor encontrado.

Space e time é O(n)
