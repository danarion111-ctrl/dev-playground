export {}

const products = new Map<string, number>()
products.set('keyboard' , 1500)
products.set('mouse' , 500)
products.set('monitor' , 7000)

const deleteMouse = products.delete('mouse')
console.log(deleteMouse)
console.log(products.has('mouse'))
console.log(products.get('mouse'))