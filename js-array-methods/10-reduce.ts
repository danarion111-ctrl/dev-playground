export{}

const numbers:number[]  = [4, 7, 2, 9, 3];
const sum:number = numbers.reduce((acc , num) => {
    return acc + num;
} , 0)
console.log(sum);

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
