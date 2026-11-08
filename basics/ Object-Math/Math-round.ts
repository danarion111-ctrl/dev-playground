export {}
function roundToTwo(number:number){
    const result = Math.round(number * 100)/100
    return result
}
console.log(roundToTwo(12.3456))
console.log(roundToTwo(5.1234))


function calculateAverage(scores: number[]):number{
    if(scores.length === 0){
        return 0;
    }
    const sum = scores.reduce((acc , score) => {
        return acc += score;
    }, 0)
    const average = Math.round(sum / scores.length)
    return average
}
console.log(calculateAverage([10, 20, 30]))