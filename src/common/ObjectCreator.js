function proxyMethod(method, object, scope) {
  return function(...args) {
    object[method](...args);

    return scope;
  };
}

class ObjectCreator {
  constructor(object, callback, exposedMethods = []) {
    this.object = object;
    this.callback = callback;

    if (exposedMethods.length) {
      exposedMethods.forEach(method => {
        this[method] = proxyMethod(method, this.object, this);
      });
    }
  }

  set(propName, propValue) {
    this.object[propName] = propValue;

    return this;
  }

  get(propName) {
    return this.object[propName];
  }

  save() {
    return this.callback(this.object);
  }
}

export default ObjectCreator;
