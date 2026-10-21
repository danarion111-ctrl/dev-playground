const waitAndSay = (text , delay) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(text), delay)
    })
}

async function run() {
    const result = await waitAndSay('Hello World!' , 1000);
    console.log(result)
}

run();

    const taskOne = waitAndSay('Better call Saul' , 3000);
    const taskTwo = waitAndSay('Breaking Bad' , 5000);

    const getTasks = async () => {
        const results = await Promise.all([taskOne, taskTwo]);
        console.log(results);
    }

    getTasks()