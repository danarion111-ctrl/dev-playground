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