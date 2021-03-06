'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Service2 = require('../Service');

var _Service3 = _interopRequireDefault(_Service2);

var _Order = require('./Order');

var _Order2 = _interopRequireDefault(_Order);

var OrderService = (function (_Service) {
  _inherits(OrderService, _Service);

  function OrderService() {
    _classCallCheck(this, OrderService);

    _get(Object.getPrototypeOf(OrderService.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(OrderService, [{
    key: 'list',
    value: function list() {
      var query = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      var filterStatement = this.createStatement(query).filterStatement;

      return this.callAsync('getOrdersByStatement', { filterStatement: filterStatement });
    }
  }, {
    key: 'create',
    value: function create() {
      for (var _len = arguments.length, orders = Array(_len), _key = 0; _key < _len; _key++) {
        orders[_key] = arguments[_key];
      }

      if (!orders.length) {
        return this.createObject(OrderService.create(), this.create.bind(this));
      }

      orders = orders.map(function (order) {
        if (order.toObject) {
          return order.toObject();
        }
        return order;
      });

      return this.createOrders({ orders: orders });
    }
  }, {
    key: 'approve',
    value: function approve(order) {
      var action = {
        orderAction: {
          attributes: { 'xsi:type': 'ApproveAndOverbookOrders' },
          skipInventoryCheck: true
        },
        filterStatement: {
          query: 'WHERE id = ' + order.id
        }
      };

      return this.performOrderAction(action);
    }
  }]);

  return OrderService;
})(_Service3['default']);

OrderService.create = function () {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return new (_bind.apply(_Order2['default'], [null].concat(args)))();
};

exports['default'] = OrderService;
module.exports = exports['default'];