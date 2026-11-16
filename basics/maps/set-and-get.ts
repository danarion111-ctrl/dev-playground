export {}
const grades = new Map<string, number>();

grades.set('Mira' , 78)
grades.set('Ion' , 91)
grades.set('Alex', 84)

grades.set('Mira' , 88)
console.log(grades.get('Ion' ) , grades.get('Mira') , grades.get('Alex'));
