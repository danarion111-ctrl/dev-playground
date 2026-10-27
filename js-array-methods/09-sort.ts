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