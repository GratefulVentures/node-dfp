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

var _Company = require('./Company');

var _Company2 = _interopRequireDefault(_Company);

var _CompanyType = require('./CompanyType');

var _CompanyType2 = _interopRequireDefault(_CompanyType);

var CompanyService = (function (_Service) {
  _inherits(CompanyService, _Service);

  function CompanyService() {
    _classCallCheck(this, CompanyService);

    _get(Object.getPrototypeOf(CompanyService.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CompanyService, [{
    key: 'list',
    value: function list(query) {
      return this.getCompaniesByStatement(this.createStatement(query));
    }
  }, {
    key: 'create',
    value: function create() {
      for (var _len = arguments.length, companies = Array(_len), _key = 0; _key < _len; _key++) {
        companies[_key] = arguments[_key];
      }

      if (!companies.length) {
        return this.createObject(new _Company2['default'](), this.create.bind(this));
      }

      companies = companies.map(function (company) {
        if (company.toObject) {
          return company.toObject();
        }
        return company;
      });

      return this.createCompanies({ companies: companies });
    }
  }, {
    key: 'advertisers',
    get: function get() {
      var service = this;

      return {
        list: function list() {
          return service.list('WHERE type = \'' + _CompanyType2['default'].ADVERTISER + '\'');
        }
      };
    }
  }, {
    key: 'agencies',
    get: function get() {
      var service = this;

      return {
        list: function list() {
          return service.list('WHERE type = \'' + _CompanyType2['default'].AGENCY + '\'');
        }
      };
    }
  }]);

  return CompanyService;
})(_Service3['default']);

exports['default'] = CompanyService;
module.exports = exports['default'];