const Number = require('./Number');
const Add = require('./Add');
const Path = require('./Path');

const number_1 = new Number(123, 32);
const number_2 = new Number(345, 128);
const add = new Add(666)
const path_1 = new Path(222, number_1, add)
const path_2 = new Path(333, number_2, add)

console.log(add.getResult())

number_1.setValue(1112)

console.log(add.getResult())