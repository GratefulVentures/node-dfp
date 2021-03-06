'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var requiredProps = ['name', 'advertiserId', 'traffickerId'];

var Order = (function (_Object) {
  _inherits(Order, _Object);

  function Order() {
    _classCallCheck(this, Order);

    _get(Object.getPrototypeOf(Order.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Order, [{
    key: 'toObject',

    /**
     * @property {String} name
     * @property {String} advertiserId
     * @property {String} salespersonId
     * @property {String} traffickerId
     */

    value: function toObject() {
      var _this = this;

      var missingProps = [];
      requiredProps.forEach(function (propName) {
        if (!_this[propName]) {
          missingProps.push(propName);
        }
      });

      if (missingProps.length) {
        throw new Error('Missing required properties: ' + JSON.stringify(missingProps));
      }

      var obj = {};

      requiredProps.forEach(function (field) {
        if (_this[field] !== null) {
          obj[field] = _this[field];
        }
      });

      return obj;
    }
  }]);

  return Order;
})(Object);

exports['default'] = Order;
module.exports = exports['default'];