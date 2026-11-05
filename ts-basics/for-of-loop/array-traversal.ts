export {}

const array:number[]=[1, 6 ,-9 , 112 ,67 ,-1 ,0]

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


