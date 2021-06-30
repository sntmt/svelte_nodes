const json = require('./store.json');
const Number = require('./Number');
const Add = require('./Add');
const Path = require('./Path')

var state = [];

json.forEach(element => {

  if(element.type =="number") {
    state.push(new Number(element.id, element.value))
  }
  if(element.type =="add") {
    state.push(new Add(element.id))
  }

  // paths al final
  if(element.type =="path") {
    var input = state.find(e => e.getId() == element.input);
    var output = state.find(e => e.getId() == element.output);
    state.push(new Path(element.id, input, output))
  }
})


console.log(state)

const add = state.find(e => e.getId() == 66);
const number = state.find(e => e.getId() == 333);
console.log(add.getResult())

number.setValue(100)
console.log(number)

console.log(add.getResult())