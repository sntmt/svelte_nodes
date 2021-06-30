module.exports = class Number {
  constructor(id, _value) {
    this.id = id || Math.random(0,1)*1000;
    this.value = _value || 0;
  }
  setValue(_value) {
    this.value = _value;
  }
  getValue() {
    return this.value;
  }
  getId() {
    return this.id;
  }
}
