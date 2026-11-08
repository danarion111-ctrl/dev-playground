export {}
function roundToTwo(number:number){
    const result = Math.round(number * 100)/100
    return result
}
console.log(roundToTwo(12.3456))
console.log(roundToTwo(5.1234))