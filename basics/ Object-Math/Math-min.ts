export{}
function getCheapestPrice(prices:number[]) {
    if(prices.length === 0){
        return null
    }
    const miniPrice = Math.min(...prices)
    return miniPrice
}
console.log(getCheapestPrice([18, 22, 15, 27, 20]))
console.log(getCheapestPrice([]))


function getLowestScore(scores:number[]){
    if(scores.length === 0){
        return null
    }
        const lowestScore = Math.min(...scores)
        return lowestScore
}
console.log(getLowestScore([90, 75, 88, 60, 95]))
console.log(getLowestScore([]))