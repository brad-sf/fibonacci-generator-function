/**
 * Generator function that yields numbers according to the fibonacci sequence
 * @param {number} start
 */
const fibGen = function* (start = 1) {
    let a = start;
    let b = 0;
    let fib;

    while(true) {
        fib = a + b;
        a = b || a;
        b = fib;
        yield fib;
    }

};

module.exports = fibGen;
