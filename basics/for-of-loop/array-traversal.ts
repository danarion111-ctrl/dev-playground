export {}

const array:number[]=[1, 6 ,-9 , 115 ,67 ,-1 ,0]

function analyzeNumbers(){
    let positive = 0;
    let negative = 0 ;
    let zero = 0
    let even = 0
    for(const number of array){
        if(number > 0){
            positive++
        } else if(number < 0){
            negative++
        } else{
            zero++
        }


        if(number %2 === 0){
            even++
        }

}
    let result = [ `Positive: ${positive}`, `Negative: ${negative}` ,`Even: ${even}` , `Zero: ${zero}` ]
    console.log(result)
}

analyzeNumbers();


const nums = [ 3 ,7 , 9 , -18 , 199 , 3456]
function getMultiplesOfThree(){
    let multiplesOfThree = []
    let notMultipliesOfThree = []
    let goodNums = 0
    let badNums = 0
    for(const num of nums){
        if(num %3 === 0){
            multiplesOfThree.push(num) ;
            goodNums ++
        }
        else{
            notMultipliesOfThree.push(num)
            badNums ++
        }
    }
    console.log(
        `All nums: ${nums},
        Divisible by 3: ${multiplesOfThree},
        Not divisible by 3: ${notMultipliesOfThree},
        Found ${goodNums} numbers divisible by 3,
        Found ${badNums} numbers not divisible by 3
    `)
}

getMultiplesOfThree();
