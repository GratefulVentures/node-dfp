'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _soap = require('soap');

var _soap2 = _interopRequireDefault(_soap);

var SoapClient = (function () {
  // networkCode: string;
  // applicationName: string;
  // version: string;
  // wsdlBase: string;
  // ns: string;
  // security: any;

  function SoapClient(networkCode, applicationName) {
    var version = arguments.length <= 2 || arguments[2] === undefined ? 'v201805' : arguments[2];

    _classCallCheck(this, SoapClient);

    this.networkCode = networkCode;
    this.applicationName = applicationName;
    this.version = version;
    this.wsdlBase = 'https://ads.google.com/apis/ads/publisher';
    this.ns = 'https://www.google.com/apis/ads/publisher/' + this.version;
  }

  _createClass(SoapClient, [{
    key: 'setCredentials',
    value: function setCredentials(authHeader) {
      this.security = {
        addHeaders: function addHeaders(headers) {
          headers.Authorization = authHeader;
        },
        toXML: function toXML() {
          return '';
        }
      };
    }
  }, {
    key: 'createRequestHeader',
    value: function createRequestHeader() {
      var RequestHeader = {
        attributes: {
          'xsi:type': 'SoapRequestHeader',
          'xmlns:ns1': this.ns
        },
        networkCode: this.networkCode,
        applicationName: this.applicationName
      };

      return { RequestHeader: RequestHeader };
    }
  }, {
    key: 'getService',
    value: function getService(serviceName) {
      var _this = this;

      var wsdl = this.wsdlBase + '/' + this.version + '/' + serviceName + '?wsdl';

      return this.createClient(wsdl).then(function (client) {
        client.addSoapHeader(_this.createRequestHeader(), '', 'ns1', '');
        client.setSecurity(_this.security);

        return client;
      });
    }
  }, {
    key: 'createClient',
    value: function createClient(wsdl) {
      return new Promise(function (resolve, reject) {
        _soap2['default'].createClient(wsdl, {}, function (err, client) {
          if (err) {
            reject(err);
          } else {
            resolve(client);
          }
        });
      });
    }
  }]);

  return SoapClient;
})();

exports['default'] = SoapClient;
module.exports = exports['default'];