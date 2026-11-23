export {}
function countVowels(word:string){
    const vowels:Record<string, boolean> = {
        a:true,
        e:true,
        i:true,
        o:true,
        u:true,
    }
    const cleanWord = word.toLowerCase()
    let vowelsCount = 0
    for(let i = 0; i < cleanWord.length; i++){
        if(vowels[cleanWord[i]] === true){
            vowelsCount++
        }
    }
    return vowelsCount
}

console.log(countVowels("PROGRAMMING"))