const {Observable} = require('rxjs');

module.exports = class Number {
  constructor(id, _value) {

    this.observable = new Observable(s => {
      s.next(_value)
    })

    this.id = id || Math.random(0,1)*1000;
    this.value = _value || 0;
  }
  setValue(_value) {
    this.value = _value;
  }
  getValue() {
    return this.value;
  }

  getObservable() {
    return this.observable;
  }

  getId() {
    return this.id;
  }
}
