export{}


const allScores ={
    Alex: 90,
    Maria: 100,
    Daniel: 80,
    John: 100
}

function buildLeaderboard(
    scores: Record<string, number>,
):{
    name:string,
    score:number,
    rank:number,
}[]{
    return Object.entries(scores)
        .map(([name , score]) => ({name , score}))
        .sort((a , b) => b.score- a.score || a.name.localeCompare(b.name))
        .map((item , index) => ({ ...item , rank:index + 1}))
}

console.log(buildLeaderboard(allScores))
