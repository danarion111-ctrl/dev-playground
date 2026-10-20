function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const a = makeCounter();
const b = makeCounter();
console.log(a(), a(),a() , b());

const order = { id: 7, items: ['чай', 'кофе'], status: 'new' };
const copy = { ...order, status: 'paid' };
console.log(order.status, copy.status, copy.items === order.items);

