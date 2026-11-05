const numbers = [ 3 ,7 , 10 , 15]

const bigNum = numbers.map ( n => {
    return n * 3})

console.log(bigNum)


const users = [
    {username: "Alex" , age : 15},
    {username: "Maria" , age :17},
    {username: "Ion" , age :14 }
]

const names = users.map( u => {
 return u.username})

console.log(names)


const messages  = [
    { id: "m1", text: "Привет", sender: "Alex" },
    { id: "m2", text: "Как дела?", sender: "Maria" },
    { id: "m3", text: "Всё хорошо", sender: "Alex" }
]

const message = messages.map( m => ({
    id: m.id ,
    displayText:`${m.sender}: ${m.text}`
}))

console.log(message)


const participants = [
    { username: "alex", age: 16 },
    { username: "maria", age: 12 },
    { username: "ion", age: 18 }
];

isAdult = participants.map(a =>({
    username: a.username,
    adult: a.age >= 18
}))
    console.log(isAdult)


const myTasks = [ "Учиться", "Кодить", "Отдыхать" ]

const numerotate = myTasks.map((task , index) =>`${index + 1}. ${task}`)

console.log(numerotate)