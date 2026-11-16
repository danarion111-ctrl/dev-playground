export {}
const grades = new Map<string, number>();

grades.set('Mira' , 78)
grades.set('Ion' , 91)
grades.set('Alex', 84)

grades.set('Mira' , 88)
console.log(grades.get('Ion' ) , grades.get('Mira') , grades.get('Alex'));


const products =  new Map<number , number>
products.set(1001 , 10)
products.set(1002 , 5)
products.set(1003 , 2)

products.set(1001, products.get(1001)! - 3)
products.set( 1002 , products.get(1002)! - 2)

const count1001 = products.get(1001)
const count1002 = products.get(1002)

console.log(count1001, count1002)