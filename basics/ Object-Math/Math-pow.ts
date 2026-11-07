export{}

function calculateSquare(number:number){
    const square = Math.pow(number, 2);
    return square;
}
console.log(calculateSquare(5))
console.log(calculateSquare(-4))
console.log(calculateSquare(1.3))

function calculatePower(base:number, exponent:number){
    const result = Math.pow(base, exponent)
    return result;
}
console.log(calculatePower(2 ,5))
console.log(calculatePower(3 ,3))
console.log(calculatePower(10, 2))