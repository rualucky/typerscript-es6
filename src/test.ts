// 'use strict';

// console.log('hello ka');

// var greetName = (name, no) => {
//     let greet;
//     if (no === 0) {
//         greet = 'hello ' + name;
//     } else {
//         greet = 'hi ' + name;
//     }
    
//     console.log(greet);
// }

// greetName('ka', 1);

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// let ts: string = 'aaaaaaaaaaaaaaaaaaaa';
// console.log(ts)

var emp = {
    id: 192,
    greet: function() { setTimeout(() => console.log(this.id), 1000) },
    fname: 'ka',
    age: 27
    
}

emp.greet();
let {id, age, fname} = emp;
console.log(id + ' ' + fname + ' ' + age);
var msg = `Hello ${emp.fname}`;
console.log(msg);



