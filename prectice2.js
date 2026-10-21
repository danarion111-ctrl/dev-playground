const waitAndSay = async(text , delay) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(text), delay)
    })
}

async function run() {
    const result = await waitAndSay('Hello World!' , 1000);
    console.log(result)
}

run();