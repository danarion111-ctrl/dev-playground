let count = 0
const Timer = setInterval(() => {
    count = count + 1

    if(count % 2 === 0) {console.log(`Tack ${count} `)}
    else if(count % 2 === 1){console.log(`Tick ${count} `)}

    if (count === 10) clearInterval(Timer)
} , 1000)








