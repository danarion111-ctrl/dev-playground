import {functionMapBabelPlugin} from "metro-source-map";

export{}

function getRandomNumber(min:number, max:number){
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min );
    return randomNum;
}
console.log(getRandomNumber(1, 10))
console.log(getRandomNumber(50, 100))
console.log(getRandomNumber(-10, 10))