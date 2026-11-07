export{}

function calculateBoxes(products:number, capacity:number){
    const boxesCount:number = Math.ceil(products/capacity);
    return boxesCount
}
console.log(calculateBoxes(20 ,5))
console.log(calculateBoxes(21 ,5))
console.log(calculateBoxes(36 ,10))
console.log(calculateBoxes(1 ,10))


function calculateMinutes(seconds:number){
    const minutes =Math.ceil(seconds/60);
    return minutes
}
console.log(calculateMinutes(5));
console.log(calculateMinutes(61));