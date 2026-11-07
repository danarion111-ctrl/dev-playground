export{}

function countCharacter(text:string , target:string ){
let count = 0;
for( const char of text ){
    if(char === target){
        count++;
    }

}
return count;
}

console.log(countCharacter('BanAna','d'));


function removeSpaces(text:string){
    let result = ''
    for( const space of text){
        if(space !== ' '){
            result = result + space
        }
    }
    return result;
}
console.log(removeSpaces('How are you?'));