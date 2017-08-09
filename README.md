# Fibonacci Generator Function - JavaScript

Generator function yielding the next number in a fibonacci sequence. Optional starting param.

## Installation
```bash
npm install fibonacci-generator-function
```

## Usage
```javascript
const fibGen = require('fibonacci-generator-function');
```

```javascript
const fib1 = fibGen();
console.log( fib1.next() ); // { value: 1, done: false }
console.log( fib1.next() ); // { value: 2, done: false }
console.log( fib1.next().value ); // 3
console.log( fib1.next().value ); // 5
console.log( fib1.next().value ); // 8
// etc...
```

```javascript
// Specified starting value 
const fib3 = fibGen(3);
console.log( fib3.next() ); // { value: 3, done: false }
console.log( fib3.next() ); // { value: 6, done: false }
console.log( fib3.next().value ); // 9
console.log( fib3.next().value ); // 15
console.log( fib3.next().value ); // 24
// etc...
```
