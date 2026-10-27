export{}

const numbers:number[]  = [4, 7, 2, 9, 3];
const sum:number = numbers.reduce((acc , num) => {
    return acc + num;
} , 0)
console.log(sum);



const numbers2:number[] = [2, 3, 4, 5];
const multiplication:number = numbers2.reduce((acc , num) =>{
    return acc*num ;
} , 1)
console.log(multiplication);


const ages:number[] = [12, 18, 25, 14, 31, 17, 20];
const adults:number = ages.reduce((acc , person)=>{
    if(person >= 18){
        acc = acc+1
    }
return acc;
    } , 0)
console.log(adults);


const numbers3:number[] = [3, 8, 11, 6, 4, 7, 10];
const sumEven:number = numbers3.reduce((acc , num)=>{
    return acc + (num % 2 === 0 ? num : 0)
} , 0)
console.log(sumEven);


const numbers4:number[] = [14, 52, 7, 89, 36, 41];
const biggestNum: number = numbers4.reduce((acc, num) =>{
   return acc > num ? acc : num
    } , numbers4[0]
)
console.log(biggestNum);


const prices = [120, 45, 300, 80, 55];
const pricesSum = prices.reduce((acc , price)=>{
    return acc + (price >= 100 ? price : 0)
} , 0)
console.log(pricesSum);

interface Expense {
    category:string;
    amount:number;
}
const expenses : Expense[] = [
    { category: "food", amount: 250 },
    { category: "transport", amount: 100 },
    { category: "food", amount: 180 },
    { category: "games", amount: 500 },
    { category: "transport", amount: 70 },
    { category: "food", amount: 120 }
];

function getExpense(items:Expense[])  {
    return items.reduce((acc , item) => {
        acc.total += item.amount;
        acc[item.category] = (acc[item.category] || 0) + item.amount ;
        return acc;
    } ,{total: 0} as Record<string, number> )}

    getExpense(expenses);
