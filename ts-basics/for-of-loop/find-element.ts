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


function sumPositiveEven(numbers:number[]){
    let result = 0
    for(const num of numbers){
        if(num > 0 && num % 2 === 0){
            result += num
        }
    }
    return result;
}
console.log(sumPositiveEven([2, -4, 6, 7, 10, -8, 3]));