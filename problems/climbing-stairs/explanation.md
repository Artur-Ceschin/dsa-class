Climbing Stairs (LeetCode 70)

You are climbing a staircase with n steps. Each time you can climb either 1 or 2 steps.

In how many distinct ways can you climb to the top?

n = 2
Output: 2  
 (1+1, 2)

n = 3
Output: 3  
 (1+1+1, 1+2, 2+1)

Solução:
Climbing Stairs — Explicação

O Climbing Stairs é um problema de recursão onde o resultado de cada degrau depende dos dois anteriores. A partir do degrau 3,
o número de maneiras de chegar até ele é exatamente a soma das maneiras de chegar no degrau 1 e no degrau 2. Isso se repete  
 para cada degrau seguinte — sempre somamos os dois resultados anteriores para formar o atual. Esse padrão é conhecido como  
 Fibonacci.

function climbingStairs(num) {  
 if (num === 1 || num === 2) return num

    return climbingStairs(num - 1) + climbingStairs(num - 2)

}

O base case 1 e 2 funciona porque não há mais escolhas a fazer — o resultado é o próprio número. O num - 1 representa chegar  
 nesse degrau vindo de 1 passo abaixo, e num - 2 representa vindo de 2 passos abaixo. A recursão desce até a base e soma os
resultados no retorno.

Problema: o time complexity é O(2ⁿ) — exponencial. Os mesmos valores são recalculados dezenas de vezes. Para n = 50, isso
destruiria a performance.

Solução: Memoization

Guardamos cada resultado já calculado em um Map. Antes de calcular, verificamos se o valor já existe — se sim, retornamos  
 direto. Assim, cada degrau é calculado exatamente uma vez, reduzindo o tempo para O(n) e o espaço para O(n).
