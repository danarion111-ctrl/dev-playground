const num = [12, 5, 30, 7, 18, 2]

corectNum = num.filter(item => item > 10 && item < 25)

console.log(corectNum);

const names = ['Alex', 'Maxim', 'Jo', 'Maria', 'Leo']

const shortName = names.filter(name => name.length === 4)
console.log(shortName);

const users = [
    { name: 'Alex', age: 17, isActive: true },
    { name: 'Maria', age: 22, isActive: false },
    { name: 'Max', age: 19, isActive: true },
    { name: 'Anna', age: 18, isActive: true }
];

const adultActiveUsers = users.filter(user =>user.isActive && user.age >= 18)
console.log(adultActiveUsers)


const products = [
    { name: 'Phone', price: 800 },
    { name: 'Case', price: 20 },
    { name: 'Laptop', price: 1500 },
    { name: 'Mouse', price: 50 }
];

const goodProducts =products.filter(prod => prod.price < 100)
    .map(prod => prod.name)
console.log(goodProducts);

