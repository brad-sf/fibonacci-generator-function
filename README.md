# Fibonacci Generator Function - JavaScript

Generator function yielding the next number in a fibonacci sequence. Optional starting param.

## Installation
`npm install fibonacci-generator-function`

```javascript
// Node.JS
const {fibGen} = require('fibonacci-generator-function');

// ES2015+
import {fibGen} from 'fibonacci-generator-function';
```

## Usage

```javascript
const fib = fibGen(); // Default sequence start of 1
const fib3 = fibGen(3); // Start sequence at 3

console.log( fib1.next() ); // { value: 1, done: false }
console.log( fib1.next() ); // { value: 2, done: false }
console.log( fib1.next().value ); // 3
console.log( fib1.next().value ); // 5
console.log( fib1.next().value ); // 8
// etc...

console.log( fib3.next() ); // { value: 3, done: false }
console.log( fib3.next() ); // { value: 6, done: false }
console.log( fib3.next().value ); // 9
console.log( fib3.next().value ); // 15
console.log( fib3.next().value ); // 24
// etc...
```
