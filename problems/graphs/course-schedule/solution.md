LeetCode 207 — Course Schedule

Você tem numCourses aulas (numeradas de 0 a n-1) e uma lista de pré-requisitos prerequisites, onde [a, b] significa "para fazer a, você precisa ter feito b" .

Retorne true se for possível completar todos os cursos, ou false se houver um ciclo.

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true  
Reason: faça 0 primeiro, depois 1

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false  
 Reason: 1 depende de 0 e 0 depende de 1 — ciclo

Solução:
Como resolver o Course Schedule

O problema nos dá um array de pares representando dependências entre cursos. Por exemplo, [1, 0]
significa que o curso 1 depende do curso 0 — ou seja, você precisa fazer o 0 antes do 1. Se tivermos  
 [[1,0],[0,1]], temos um problema: para fazer o 1 precisamos do 0, mas para fazer o 0 precisamos do 1.
Ciclo. Impossível.

A pergunta é simples: existe algum ciclo entre as dependências?

O algoritmo usado é o DFS (busca em profundidade). Mas antes de rodar o DFS, transformamos o array de  
 pré-requisitos numa lista adjacente — onde cada curso aponta para os cursos que dependem dele.

Com essa lista, iteramos por todos os cursos e chamamos o DFS em cada um. Usamos dois sets: visiting  
 (nós do caminho atual) e visited (nós completamente processados). Se durante o DFS chegamos a um nó que já está em visiting, encontramos um ciclo. Se está em visited, já sabemos que esse caminho é seguro — pulamos. Após processar um nó completamente, ele sai do visiting e entra no visited
