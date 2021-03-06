'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _commonStatement = require('./common/Statement');

var _commonStatement2 = _interopRequireDefault(_commonStatement);

var _commonObjectCreator = require('./common/ObjectCreator');

var _commonObjectCreator2 = _interopRequireDefault(_commonObjectCreator);

var Service = (function () {
  function Service(soapService) {
    _classCallCheck(this, Service);

    this.waitingOperations = [];
    this.setSoapService(soapService);

    this.serviceName = this.constructor.name.replace(/Service$/, '');
  }

  _createClass(Service, [{
    key: 'createStatement',
    value: function createStatement(query) {
      if (typeof query === 'string') {
        return { filterStatement: { query: query } };
      }

      if (!query) {
        return { filterStatement: { query: '' } };
      }

      var statement = new _commonStatement2['default'](query);

      return { filterStatement: statement.createStatement() };
    }
  }, {
    key: 'list',
    value: function list(query) {
      return this.callAsync('get' + this.serviceName + 'sByStatement', this.createStatement(query));
    }
  }, {
    key: 'setSoapService',
    value: function setSoapService(soapService) {
      var _this = this;

      this.soapService = soapService;

      Object.keys(soapService).forEach(function (method) {
        if (!(method in _this)) {
          _this[method] = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return _this.callAsync.apply(_this, [method].concat(args));
          };
        }
      });

      if (this.initialize) {
        this.initialize();
      }

      return this;
    }
  }, {
    key: 'callAsync',
    value: function callAsync(method) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var fn = this.soapService[method];

      return new Promise(function (resolve, reject) {
        fn.apply(undefined, _toConsumableArray(args.concat([function (err, res) {
          if (err) {
            reject(err);
          } else {
            if (res && 'rval' in res) {
              res = res.rval;
            }

            resolve(res);
          }
        }])));
      });
    }
  }, {
    key: 'createObject',
    value: function createObject() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return new (_bind.apply(_commonObjectCreator2['default'], [null].concat(args)))();
    }
  }, {
    key: 'findOrCreate',
    value: function findOrCreate(obj) {
      var _this2 = this;

      return this.list('WHERE name = \'' + obj.name + '\'').then(function (res) {
        if (res && res.results) {
          return res.results[0];
        }

        return _this2.create(obj);
      });
    }
  }]);

  return Service;
})();

exports['default'] = Service;
module.exports = exports['default'];