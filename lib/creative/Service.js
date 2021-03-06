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

var CreativeService = (function (_Service) {
  _inherits(CreativeService, _Service);

  function CreativeService() {
    _classCallCheck(this, CreativeService);

    _get(Object.getPrototypeOf(CreativeService.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CreativeService, [{
    key: 'create',
    value: function create() {
      for (var _len = arguments.length, creatives = Array(_len), _key = 0; _key < _len; _key++) {
        creatives[_key] = arguments[_key];
      }

      // if (! creatives.length) {
      //     return this.createObject(
      //         new LineItem(),
      //         this.create.bind(this)
      //     )
      // }

      if (creatives.length === 1 && Array.isArray(creatives[0])) {
        creatives = creatives[0];
      }

      creatives = creatives.map(function (obj) {
        if (obj.toObject) {
          return obj.toObject();
        }
        return obj;
      });

      return this.createCreatives({ creatives: creatives });
    }
  }, {
    key: 'update',
    value: function update() {
      for (var _len2 = arguments.length, creatives = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        creatives[_key2] = arguments[_key2];
      }

      if (creatives.length === 1 && Array.isArray(creatives[0])) {
        creatives = creatives[0];
      }

      return this.callAsync('updateCreatives', { creatives: creatives });
    }
  }]);

  return CreativeService;
})(_Service3['default']);

exports['default'] = CreativeService;
module.exports = exports['default'];