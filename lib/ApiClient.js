'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _SoapClient = require('./SoapClient');

var _SoapClient2 = _interopRequireDefault(_SoapClient);

var _inventoryService = require('./inventory/Service');

var _inventoryService2 = _interopRequireDefault(_inventoryService);

var _orderService = require('./order/Service');

var _orderService2 = _interopRequireDefault(_orderService);

var _lineitemService = require('./lineitem/Service');

var _lineitemService2 = _interopRequireDefault(_lineitemService);

var _networkService = require('./network/Service');

var _networkService2 = _interopRequireDefault(_networkService);

var _companyService = require('./company/Service');

var _companyService2 = _interopRequireDefault(_companyService);

var _userService = require('./user/Service');

var _userService2 = _interopRequireDefault(_userService);

var _creativeService = require('./creative/Service');

var _creativeService2 = _interopRequireDefault(_creativeService);

var _customTargetingService = require('./customTargeting/Service');

var _customTargetingService2 = _interopRequireDefault(_customTargetingService);

var _creativeWrapperService = require('./creativeWrapper/Service');

var _creativeWrapperService2 = _interopRequireDefault(_creativeWrapperService);

var _lineItemCreativeAssociationService = require('./lineItemCreativeAssociation/Service');

var _lineItemCreativeAssociationService2 = _interopRequireDefault(_lineItemCreativeAssociationService);

var _reportService = require('./report/Service');

var _reportService2 = _interopRequireDefault(_reportService);

var _placementService = require('./placement/Service');

var _placementService2 = _interopRequireDefault(_placementService);

var _labelService = require('./label/Service');

var _labelService2 = _interopRequireDefault(_labelService);

var ServiceMap = {
  inventory: _inventoryService2['default'],
  order: _orderService2['default'],
  lineitem: _lineitemService2['default'],
  network: _networkService2['default'],
  company: _companyService2['default'],
  users: _userService2['default'],
  creative: _creativeService2['default'],
  customTargeting: _customTargetingService2['default'],
  creativeWrapper: _creativeWrapperService2['default'],
  lineItemCreativeAssociation: _lineItemCreativeAssociationService2['default'],
  report: _reportService2['default'],
  placement: _placementService2['default'],
  label: _labelService2['default']
};

function createAliases() {
  var aliases = {};
  Object.keys(ServiceMap).forEach(function (alias) {
    var service = ServiceMap[alias];

    aliases[service.name] = alias;
  });

  return aliases;
}

var ServiceAliases = createAliases();

var ApiClient = (function () {
  function ApiClient(networkCode, displayName, version) {
    _classCallCheck(this, ApiClient);

    this.soap = new _SoapClient2['default'](networkCode, displayName, version);

    this.services = {};
  }

  _createClass(ApiClient, [{
    key: 'load',
    value: function load() {
      return this.getServices.apply(this, arguments).then(this.exposeServices.bind(this));
    }
  }, {
    key: 'exposeServices',
    value: function exposeServices(services) {
      var _this = this;

      Object.keys(services).forEach(function (serviceName) {
        _this.exposeService(serviceName, services[serviceName]);
      });

      return services;
    }
  }, {
    key: 'exposeService',
    value: function exposeService(serviceName, service) {
      if (serviceName in ServiceAliases) {
        var alias = ServiceAliases[serviceName];
        var ServiceWrapper = ServiceMap[alias];

        this[alias] = new ServiceWrapper(service);
      }
    }
  }, {
    key: 'setAuthClient',
    value: function setAuthClient(authClient) {
      this.authClient = authClient;

      return this;
    }
  }, {
    key: 'authenticate',
    value: function authenticate() {
      var _this2 = this;

      if (!this.authClient) {
        throw new Error('Attempted to load a service before authenticating');
      }

      return new Promise(function (resolve, reject) {
        _this2.authClient.authorize(function (err, token) {
          if (err) {
            reject(err);
          } else {
            _this2.isAuthenticated = true;
            _this2.soap.setCredentials(token.token_type + ' ' + token.access_token);
            resolve();
          }
        });
      });
    }
  }, {
    key: 'getServices',
    value: function getServices() {
      var _this3 = this;

      for (var _len = arguments.length, serviceNames = Array(_len), _key = 0; _key < _len; _key++) {
        serviceNames[_key] = arguments[_key];
      }

      var services = {};

      if (!this.isAuthenticated) {
        return this.authenticate().then(function () {
          return _this3.getServices.apply(_this3, _toConsumableArray(serviceNames));
        });
      }

      serviceNames = serviceNames.map(this.resolveServiceName);

      return Promise.all(serviceNames.map(this.getService.bind(this))).then(function (results) {
        serviceNames.forEach(function (name, i) {
          return services[name] = results[i];
        });

        return services;
      });
    }
  }, {
    key: 'getService',
    value: function getService(serviceName) {
      var _this4 = this;

      serviceName = this.resolveServiceName(serviceName);

      if (serviceName in this.services) {
        return Promise.resolve(this.services[serviceName]);
      }

      return this.soap.getService(serviceName).then(function (service) {
        _this4.services[serviceName] = service;

        return service;
      });
    }
  }, {
    key: 'resolveServiceName',
    value: function resolveServiceName(serviceName) {
      if (serviceName in ServiceMap) {
        serviceName = ServiceMap[serviceName].name;
      }

      return serviceName;
    }
  }, {
    key: 'fromDfpDate',
    value: function fromDfpDate(dfpDate) {
      return new Date(dfpDate.date.year, dfpDate.date.month, dfpDate.date.day, dfpDate.hour, dfpDate.minute, dfpDate.second);
    }
  }, {
    key: 'toDfpDate',
    value: function toDfpDate(date, timeZoneID) {
      return {
        date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        },
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        timeZoneID: timeZoneID
      };
    }
  }]);

  return ApiClient;
})();

exports['default'] = ApiClient;
module.exports = exports['default'];