'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Service2 = require('../Service');

var _Service3 = _interopRequireDefault(_Service2);

var _LineItem = require('./LineItem');

var _LineItem2 = _interopRequireDefault(_LineItem);

var LineItemService = (function (_Service) {
  _inherits(LineItemService, _Service);

  function LineItemService() {
    _classCallCheck(this, LineItemService);

    _get(Object.getPrototypeOf(LineItemService.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(LineItemService, [{
    key: 'list',
    value: function list(query) {
      return this.getLineItemsByStatement(this.createStatement(query));
    }
  }, {
    key: 'findOrCreate',
    value: function findOrCreate(lineItem) {
      var _this = this;

      return this.list('WHERE name = \'' + lineItem.name + '\'').then(function (res) {
        if (res && res.results) {
          return res.results[0];
        }

        return _this.create(lineItem);
      });
    }
  }, {
    key: 'create',
    value: function create() {
      for (var _len = arguments.length, lineItems = Array(_len), _key = 0; _key < _len; _key++) {
        lineItems[_key] = arguments[_key];
      }

      if (!lineItems.length) {
        return this.createObject(new _LineItem2['default'](), this.create.bind(this));
      }

      lineItems = lineItems.map(function (order) {
        if (order.toObject) {
          return order.toObject();
        }
        return order;
      });

      return this.createLineItems({ lineItems: lineItems });
    }
  }, {
    key: 'update',
    value: function update() {
      for (var _len2 = arguments.length, lineItems = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        lineItems[_key2] = arguments[_key2];
      }

      if (lineItems.length === 1 && Array.isArray(lineItems[0])) {
        lineItems = lineItems[0];
      }
      return this.callAsync('updateLineItems', { lineItems: lineItems });
    }
  }]);

  return LineItemService;
})(_Service3['default']);

exports['default'] = LineItemService;
module.exports = exports['default'];