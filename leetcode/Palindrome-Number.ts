export {}

function isPalindrome(x:number): boolean {
    const num = String(x).split("");
    const reversed =[...num].reverse()

return num.join('') === reversed.join('');
}

console.log(isPalindrome(-676))