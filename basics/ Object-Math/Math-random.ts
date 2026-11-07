import {functionMapBabelPlugin} from "metro-source-map";

export{}

function getRandomNumber(min:number, max:number){
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min );
    return randomNum;
}
console.log(getRandomNumber(1, 10))
console.log(getRandomNumber(50, 100))
console.log(getRandomNumber(-10, 10))


function getRandomItem(items:any[]){
    if(items.length === 0){
        return null
    }
    const randomItem = Math.floor(Math.random()*items.length)
    return items[randomItem]
}
console.log(getRandomItem(["Apple", "Banana", "Orange"]));