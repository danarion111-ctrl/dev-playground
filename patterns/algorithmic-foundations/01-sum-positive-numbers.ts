export {}

function sumPositiveNumber(nums: number[]) {
    let sum = 0;

    for(let num of nums){


        if(num > 0){
            sum += num;
        }
    }
    return sum;
}

console.log(sumPositiveNumber([-5, 10, -2, 4]));