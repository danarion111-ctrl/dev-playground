export{}

function getBestScore(scores:number[]){
    const bestScore = Math.max(...scores)
return bestScore
}
console.log(getBestScore([75, 90, 62, 100, 84]))