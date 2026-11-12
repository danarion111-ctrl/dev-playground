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