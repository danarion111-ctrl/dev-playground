export{}

function getBestScore(scores:number[]){
    const bestScore = Math.max(...scores)
return bestScore
}
console.log(getBestScore([75, 90, 62, 100, 84]))

function getHighestTemperature(temperatures:number[]){
    const highestTemperature = Math.max(...temperatures)
    return highestTemperature
}
console.log(getHighestTemperature([18, 22, 15, 27, 20]))