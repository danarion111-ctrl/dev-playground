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



const products = {
    keyboard: { price: 80, stock: 5 },
    mouse: { price: 25, stock: 10 },
    monitor: { price: 200, stock: 0 },
    headphones: { price: 60, stock: 3 },
    webcam: { price: 40, stock: 8 },
};
function getAffordableProducts(
    products : Record<string, {
        price: number;
        stock: number;
    }>,
    budget :number
):{
    name:string;
    price:number
}[]{
    return Object.entries(products)
        .filter(([_ , prod])=> prod.price <= budget && prod.stock > 0)
        .map(([name , prod]) => ({name , price: prod.price }))
        .sort((a , b) => a.price - b.price)
}
console.log(getAffordableProducts(products , 80))