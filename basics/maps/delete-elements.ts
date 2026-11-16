export {}

const products = new Map<string, number>()
products.set('keyboard' , 1500)
products.set('mouse' , 500)
products.set('monitor' , 7000)

const deleteMouse = products.delete('mouse')
console.log(deleteMouse)
console.log(products.has('mouse'))
console.log(products.get('mouse'))


const tokens = new Map<string, number>()
tokens.set('token-A', 101)
tokens.set('token-B', 205)
tokens.set('token-C', 309)

const tokensToDelete = ["token-B", "token-X", "token-A"];

tokensToDelete.forEach(token => {
if(tokens.has(token)) {
    tokens.delete(token)
}
})
