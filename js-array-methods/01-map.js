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
