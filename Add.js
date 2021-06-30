module.exports = class Add {
  constructor(id) {
    this.id = id || Math.random(0,1) * 1000;
    this.inputs = [];
  }
  setInput(_value) {
    this.inputs.push(_value)
  }
  getResult() {
    var result = [];
    this.inputs.forEach(element => {
      element.getObservable().subscribe(value => result.push(value) )
    })
    return result.reduce((a, b) => a + b, 0)
  }
  getId() {
    return this.id;
  }
}
