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
