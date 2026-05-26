// K Closest Points to Origin
//   ▎
//   ▎ Dado um array de pontos [x, y] e um número k, retorna os k pontos mais próximos da origem (0, 
//   ▎ 0).
//   ▎
//   ▎ A distância de um ponto [x, y] até a origem é √(x² + y²).
//   ▎
//   ▎ points = [[1,3],[-2,2]], k = 1 → [[-2,2]]
//   ▎
//   ▎ Distâncias:
//   ▎ - [1,3] → √(1+9) = √10 ≈ 3.16
//   ▎ - [-2,2] → √(4+4) = √8 ≈ 2.83 ← mais próximo
//   ▎
//   ▎ points = [[3,3],[5,-1],[-2,4]], k = 2 → [[3,3],[-2,4]]

//   ---
//   Agora — qual seria sua abordagem? Como você resolveria isso passo a passo?

// primeiro eu calcularia a raiz quadrada de cada um e pegaria os top k menores


function closestPointsToOrigin(points, k) {
  return points.sort((a,b) => 
    ((a[0] * a[0]) + (a[1] * a[1])) - ((b[0] * b[0]) + (b[1] * b[1])))
    .slice(0, k)
}


const points = [[1,3],[-2,2]]
const k = 1
console.log(closestPointsToOrigin(points, k))