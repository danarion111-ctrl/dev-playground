export {}

const name = 'Dan'
const age = 15
const isStudying = true

function showInfo(name :string , age:number , isStudying:boolean) {
    const status = isStudying ? 'currently studying hard' : 'taking a break'
    console.log(`Hi! I'm ${name}, I'm ${age} years old, and right now I'm ${status}.`)
}
showInfo(name , age , isStudying)