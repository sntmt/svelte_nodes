const json = require('./store.json');
const Number = require('./Number');
const Add = require('./Add');
const Path = require('./Path')

var state = {};

json.forEach(element => {

  switch(element.type) {
    case 'number' :
      state[element.id] = new Number(element.id, element.value)
      break;
    case 'add': 
      state[element.id] = new Add(element.id)
      break;
    case 'path': {
      state[element.id] = new Path(element.id, state[element.input], state[element.output])
      break;
    }
  }
});



console.log(state[66].getResult())

state[333].setValue(1200)


console.log(state[66].getResult())