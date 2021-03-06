"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function proxyMethod(method, object, scope) {
  return function () {
    object[method].apply(object, arguments);

    return scope;
  };
}

var ObjectCreator = (function () {
  function ObjectCreator(object, callback) {
    var _this = this;

    var exposedMethods = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

    _classCallCheck(this, ObjectCreator);

    this.object = object;
    this.callback = callback;

    if (exposedMethods.length) {
      exposedMethods.forEach(function (method) {
        _this[method] = proxyMethod(method, _this.object, _this);
      });
    }
  }

  _createClass(ObjectCreator, [{
    key: "set",
    value: function set(propName, propValue) {
      this.object[propName] = propValue;

      return this;
    }
  }, {
    key: "get",
    value: function get(propName) {
      return this.object[propName];
    }
  }, {
    key: "save",
    value: function save() {
      return this.callback(this.object);
    }
  }]);

  return ObjectCreator;
})();

exports["default"] = ObjectCreator;
module.exports = exports["default"];