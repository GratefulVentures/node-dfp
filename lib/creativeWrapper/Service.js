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

var CreativeWrapperService = (function (_Service) {
  _inherits(CreativeWrapperService, _Service);

  function CreativeWrapperService() {
    _classCallCheck(this, CreativeWrapperService);

    _get(Object.getPrototypeOf(CreativeWrapperService.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CreativeWrapperService, [{
    key: 'create',
    value: function create() {
      for (var _len = arguments.length, creativeWrappers = Array(_len), _key = 0; _key < _len; _key++) {
        creativeWrappers[_key] = arguments[_key];
      }

      // if (! creativeWrappers.length) {
      //     return this.createObject(
      //         new LineItem(),
      //         this.create.bind(this)
      //     )
      // }

      if (creativeWrappers.length === 1 && Array.isArray(creativeWrappers[0])) {
        creativeWrappers = creativeWrappers[0];
      }

      creativeWrappers = creativeWrappers.map(function (obj) {
        if (obj.toObject) {
          return obj.toObject();
        }
        return obj;
      });

      return this.createCreativeWrappers({ creativeWrappers: creativeWrappers });
    }
  }]);

  return CreativeWrapperService;
})(_Service3['default']);

exports['default'] = CreativeWrapperService;
module.exports = exports['default'];