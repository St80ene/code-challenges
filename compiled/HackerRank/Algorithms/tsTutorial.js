"use strict";
const message = 'hello';
const user = {
    name: 'Boss',
    age: 34
};
console.log(message);
function greeting(name, date) {
    console.log(`Hello ${name}, today is ${date.toDateString()}`);
}
greeting('Chidera', new Date());
