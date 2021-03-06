'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _commonStatement = require('./common/Statement');

var _commonStatement2 = _interopRequireDefault(_commonStatement);

var _inventory = require('./inventory');

exports['default'] = Object.defineProperties({
  createClient: function createClient() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new (_bind.apply(_ApiClient2['default'], [null].concat(args)))();
  },

  AdUnit: _inventory.AdUnit,

  Statement: _commonStatement2['default']

}, {
  adunit: {
    get: function get() {
      return new _inventory.AdUnit();
    },
    configurable: true,
    enumerable: true
  }
});
module.exports = exports['default'];