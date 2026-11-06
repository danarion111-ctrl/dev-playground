export{}

function findFirstGreater(numbers:number[], limit:number){
    let result = null;
    for(const num of numbers){
        if (num > limit){
            result = num
            break;
        }
        else{
            result = null
        }
    }
    return result;
}

console.log(findFirstGreater([4, 8, 12, 17, 21], 10))
console.log(findFirstGreater([2, 4, 6], 10));