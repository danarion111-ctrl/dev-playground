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