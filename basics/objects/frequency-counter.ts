export{}

const AllWords = [
    " React ",
    "node",
    "React",
    "",
    "NODE",
    "react native",
    "node"
];

function countWords(words: string[]){
    const count:Record<string, number> = Object.create(null);

    for( const RawWord of words ){
        const word = RawWord.trim().toLowerCase();
        if( word !== '' ){
            count[word] = (count[word] ?? 0) + 1;
        }
    }

    return count;
}

console.log(countWords(AllWords));





function  findMostFrequent(items:string[]){
    const counts:Record<string, {count :number ,original:string}> = Object.create(null);
    let maxItem: string|null = null
    let maxCount = 0

    for( const rawItem of items ){
        const trimmed = rawItem.trim();
        if(!trimmed) continue

        const key = trimmed.toLowerCase();

        if(!counts[key]){
            counts[key] = {count : 1, original:key};
        }else{
            counts[key].count++;
        }
        if(counts[key].count > maxCount){
            maxCount = counts[key].count;
            maxItem = counts[key].original
        }

    }

    return {
        item: maxItem ,
        count : maxCount,
    }
}

console.log(findMostFrequent(["JS", "React", "js", "Node", "React", "JS"]))
