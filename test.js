const {fibGen} = require('./index.js');

const fib1 = fibGen(); // 1 is default param
const fib2 = fibGen(2);

if (fib1.next().value !== 1 || fib1.next().value !== 2 || fib1.next().value !== 3 || fib1.next().value !== 5)
    process.exit(1);

if (fib2.next().value !== 2 || fib2.next().value !== 4 || fib2.next().value !== 6 || fib2.next().value !== 10)
    process.exit(1);

process.exit(0);
