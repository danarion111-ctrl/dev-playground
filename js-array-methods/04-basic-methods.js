//push()
const games = ['Minecraft', 'Terraria'];
games.push('Portal 2')
console.log(games);

const nums = [ 10 , 20 ,30]
result = nums.push(100)
console.log(nums)
console.log(result)

//pop()
const tasks = ['Уроки', 'Уборка', 'Прогулка'];
lastTask = tasks.pop()
console.log(lastTask)
console.log(tasks)

//unshift()
const players = ['Борис', 'Виктор'];
const newPlayers = players.unshift('Глеб' , 'Даша')
console.log(newPlayers)
console.log(players)

//shift()
const orders = ['Заказ №1', 'Заказ №2', 'Заказ №3'];
firstOrder = orders.shift()
console.log(firstOrder)
console.log(orders)

//includes()
const ingredients = ['мука', 'молоко', 'яйца'];
console.log(ingredients.includes('молоко'))
console.log(ingredients.includes('мука'))
if(ingredients.includes('яйца')){
    console.log('Доступ разрешен')
}

//indexOf()
const animals = [
    'кот',
    'собака',
    'попугай',
];

console.log(animals.indexOf('попугай'))
console.log(animals.indexOf('тигр'))
console.log(animals.indexOf('собака'))
const position = animals.indexOf('тигр')
if(position === - 1){
    console.log('Животное отсутствует')
}

//at()
const scores = [12, 25, 38, 41, 56];
console.log(scores.at(0))
console.log(scores.at(-1))
console.log(scores.at(-2))
console.log(scores.at(10))

//concat()
const first = [1, 2, 3];
const second = [4, 5];
const third = [6, 7];
allNumbers = first.concat(second , third);
console.log(allNumbers);
const bigFirst = first.concat(100)
console.log(bigFirst)

//reverse()
const letters = ['a', 'b', 'c', 'd'];
const reversLetters = letters.reverse()
console.log(letters)
console.log(reversLetters)

//join()
const words = ['JavaScript', 'это', 'интересно'];
const numbers = [10, 20, 30, 40];
console.log(words)
console.log(numbers)
console.log(words.join(' ') + '!')
console.log(numbers.join(' - ') + ' = ?')