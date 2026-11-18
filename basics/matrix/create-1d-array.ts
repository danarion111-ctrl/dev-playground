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