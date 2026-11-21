export {}
function createFilledArray(length: number, value: number){
 if (length < 0){
     throw new RangeError("Length must be non-negative")
 }
 else if(length === 0){
     return []
 }
    else{
     return Array(length).fill(value)
    }
}

console.log(createFilledArray(4 , 7))



function createActivityMask(
    length: number,
    activeStart: number,
    activeEnd: number
){
 const array = Array(length).fill(0)
    array.fill(1 , activeStart ,activeEnd)
    return array
}
console.log(createActivityMask(10 , 2 , 8))

