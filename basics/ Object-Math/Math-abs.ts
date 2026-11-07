export {}
function getDistance(a:number,b:number){
    const distance:number = Math.abs(a - b)
    return distance
}
console.log(getDistance(12,2))
console.log(getDistance(1,87))
console.log(getDistance(6,21))
console.log(getDistance(65,5))

function getPriceDifference(priceA:number , priceB:number){
    const diff:number = Math.abs(priceA - priceB);
    return diff
}

console.log(getPriceDifference(150, 100));
console.log(getPriceDifference(80, 120));
console.log(getPriceDifference(75, 75));
