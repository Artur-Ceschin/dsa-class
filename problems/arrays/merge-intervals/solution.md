LeetCode 56 — Merge Intervals

Dado um array de intervalos intervals onde intervals[i] = [start, end], junte todos os intervalos que se sobrepõem e retorne o  
resultado.

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]  
Reason: [1,3] e [2,6] se sobrepõem → viram [1,6]

Input: [[1,4],[4,5]]  
Output: [[1,5]]  
Reason: [1,4] e [4,5] se tocam → viram [1,5]

Solução — Merge Intervals

Para resolver esse problema, primeiro ordenamos o array pelo início de cada intervalo. Em JavaScript  
 fazemos isso com intervals.sort((a, b) => a[0] - b[0]).

Com o array ordenado, iteramos comparando cada intervalo com o próximo. A condição de sobreposição é: o
end do intervalo atual é maior ou igual ao start do próximo. Se isso for verdade, fazemos o merge —
atualizamos o end do intervalo atual para Math.max(end, nextEnd) e removemos o próximo com splice(i + 1,
1). Depois decrementamos i para não pular o elemento que assumiu aquela posição.

Se não houver sobreposição, apenas avançamos.

Complexidade:

- Tempo: O(n log n) pelo sort
- Espaço: O(1) pois modificamos o array in-place  

