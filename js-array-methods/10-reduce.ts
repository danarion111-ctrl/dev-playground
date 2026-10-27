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


const prices:number[] = [120, 45, 300, 80, 55];
const pricesSum:number = prices.reduce((acc , price) =>{
    return acc + (price >= 100 ? price : 0)
} , 0)
console.log(pricesSum);

interface Employee{
    name: string,
    salary: number
}
const employees: Employee[] = [
    { name: "Alex", salary: 1200 },
    { name: "Maria", salary: 1800 },
    { name: "Ion", salary: 1500 }
];
const salaries = employees.reduce((acc , money)=>{
    return acc + money.salary
} , 0)
console.log(salaries);


const fruits:string[] = [
    "apple", "banana", "apple",
    "orange", "banana", "apple"
];
const fruitGroups = fruits.reduce((acc , fruit)=>{
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc;

}, {} as Record<string, number>);
console.log(fruitGroups);



const words = ["Я", "изучаю", "JavaScript"];
const text = words.reduce((acc ,word)=>{
    return acc ? acc + ' ' + word : word
} , '')
console.log(text);



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
