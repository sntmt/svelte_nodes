const {Observable, BehaviorSubject} = require('rxjs');

module.exports = class Number {
  constructor(id, _value) {
    this.observable = new BehaviorSubject(_value)
    this.id = id || Math.random(0,1)*1000;
  }
  setValue(_value) {
    this.observable.next(_value)
  }
  getObservable() {
    return this.observable;
  }
  getId() {
    return this.id;
  }
}