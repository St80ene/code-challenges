const message = 'hello';

const user = {
    name: 'Boss',
    age: 34
}

console.log(message);

function greeting(name:string, date:Date){
    console.log(`Hello ${name}, today is ${date.toDateString()}`);
}

greeting('Chidera', new Date())