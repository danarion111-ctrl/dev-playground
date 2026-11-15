export {}
function getScoreStats(
    scores: Record<string, number>
):{
    count:number;
    total:number;
    average:number;
    highest:number | null
}{
    const scoresValue = Object.values(scores);

    const scoresCount = scoresValue.length;

    const scoresSum = scoresValue.reduce((acc , value)=>{
          acc += value
        return acc
        } ,0
    )

    const averageScores = scoresSum/scoresCount

    const highestScores = scoresValue.reduce((acc , value)=> {
         acc = acc > value ? acc : value
        return acc;
    })

    return{
        count:scoresCount,
        total:scoresSum,
        average:averageScores,
        highest:highestScores,
    }
}
console.log(getScoreStats({
    Alex: 90,
    Maria: 100,
    Daniel: 70,
}))


const inventory = {
    keyboard: { price: 80, quantity: 3 },
    mouse: { price: 25, quantity: 5 },
    monitor: { price: 200, quantity: 2 },
};

function calculateInventoryValue(
    inventory: Record<string, {
        price:number,
        quantity:number,
    }>
){
return Object.values(inventory).reduce((acc , value)=> {
    acc += value.price * value.quantity
    return acc
} , 0 )

}
console.log(calculateInventoryValue(inventory));