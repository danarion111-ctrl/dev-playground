export{}
function strStr(haystack: string, needle: string) {
const windowSize  = needle.length;

for(let i = 0; i <= haystack.length-windowSize; i++) {
    const window = haystack.slice(i, i + windowSize);

    if(window === needle) {
        return i;
    }

}
    return -1

}

console.log(strStr('abcdef' , 'cde'))