const Number = require('./Number');
const Suma = require('./Add');
const Path = require('./Path')

// nodo number
const num_1 = new Number();
num_1.setValue(23);

// nodo number
const num_2 = new Number();
num_2.setValue(12);

// nodo add
const add = new Suma();

// path
const path_1 = new Path();
path_1.setInput(num_1)
path_1.setOutput(add)

const path_2 = new Path();
path_2.setInput(num_2)
path_2.setOutput(add)

console.log(add.getResult())