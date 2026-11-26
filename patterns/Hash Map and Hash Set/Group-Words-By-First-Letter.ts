export {}
function groupWords(arr:string[]){
    const group = new Map<string, string[]>()
    for(let word of arr){
        if(!word)continue
        const firstLetter = word[0]
        const bucket = group.get(firstLetter) ?? []
        bucket.push(word)
        group.set(firstLetter , bucket)
    }
    return group
}

console.log(groupWords([
    "apple",
    "banana",
    "avocado",
    "blueberry",
    "cherry",
    "apricot"
]))