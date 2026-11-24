export {}

function getWordLengths( text: string){
    let currentLength = 0
    const result:number[] = []
 for (let i = 0 ; i < text.length ; i++){
     if (text[i] !== ' '){
         currentLength ++
     }else if(currentLength > 0){
         result.push(currentLength)
         currentLength = 0
 }
    }
 if(currentLength > 0){
     result.push(currentLength)
 }
 return result
}

console.log(getWordLengths('  learn   algorithms '))