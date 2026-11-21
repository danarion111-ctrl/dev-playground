export{}
function isValid(s:string){

    const open =[
        '(',  '{', '['
    ]
    const close= [
        ')' ,'}',']'
    ]
    let stack = []

    for( let char of s){

if( open.includes( char )){
    stack.push(char)

}else if( close.includes( char )){
    let last = stack.pop()

    if(last === undefined){
return false

    }

    if(open.indexOf(last) !== close.indexOf(char)){
        return false
    }
}


    }

    return stack.length === 0;
}
console.log(isValid('([]){}'))
console.log(isValid('([)]'))