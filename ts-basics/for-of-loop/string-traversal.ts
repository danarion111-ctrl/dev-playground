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