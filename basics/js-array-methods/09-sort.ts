export{}

const prices : number[] = [349, 99, 1250, 499, 75, 349, 199];
const sortedPrices = [...prices].sort((a , b) => a - b)
console.log(prices)
console.log(sortedPrices)

interface Product{
    name: string;
    price: number;
    rating: number;
}
const products = [
    { name: "Клавиатура", price: 1200, rating: 4.5 },
    { name: "Мышь", price: 500, rating: 4.8 },
    { name: "Монитор", price: 6000, rating: 4.7 },
    { name: "Коврик", price: 500, rating: 4.2 },
    { name: "Наушники", price: 1200, rating: 4.9 }
];

const sortedProducts:Product[] = [...products].sort((a , b)=> a.price - b.price || b.rating - a.rating)
console.log(products)
console.log(sortedProducts)



interface Employee {
    name:string
    salary:number
    experience:number
}
const employees = [
    { name: "Олег", salary: 12000, experience: 2 },
    { name: "Анна", salary: 18000, experience: 3 },
    { name: "Борис", salary: 18000, experience: 5 },
    { name: "Мария", salary: 9000, experience: 1 },
    { name: "Ирина", salary: 12000, experience: 4 }
];

const sortedEmployees : Employee[] = [...employees].sort((a  , b) => b.salary - a.salary || b.experience - a.experience || a.name.localeCompare(b.name , 'ru'))
console.log(sortedEmployees)