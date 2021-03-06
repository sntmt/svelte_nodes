module.exports = class Path {
    constructor(id, input, output) {
    this.id = id || Math.random(0,1)*1000;
    this.input = input || 0;
    if(output) {
      output.setInput(this.input);
    }
  }
  setInput(object) {
    this.input = object;
  }
  setOutput(object) {
    object.setInput(this.input);
  }
  getId() {
    return this.id;
  }
}