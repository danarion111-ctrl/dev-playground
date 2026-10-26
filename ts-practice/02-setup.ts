export {}

const name: string = 'Dan'
const age: number = 15
const isStudying: boolean = true

function showInfo() {
    const status = isStudying ? 'currently studying hard' : 'taking a break'
    console.log(`Hi! I'm ${name}, I'm ${age} years old, and right now I'm ${status}.`)
}