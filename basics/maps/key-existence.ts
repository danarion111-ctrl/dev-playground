export {}
const promoCods = new Map<string, number>()
promoCods.set('WELCOME0' , 0)
promoCods.set('SALE20' , 20)
promoCods.set('NEWUSER' , 10)

console.log(promoCods.has('SALE20'))
console.log(promoCods.has('NEWUSER'))
console.log(promoCods.has('INVALID'))