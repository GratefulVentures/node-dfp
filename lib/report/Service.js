'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Service2 = require('../Service');

var _Service3 = _interopRequireDefault(_Service2);

var _ReportQuery = require('./ReportQuery');

var _ReportQuery2 = _interopRequireDefault(_ReportQuery);

var _ReportJob = require('./ReportJob');

var _ReportJob2 = _interopRequireDefault(_ReportJob);

var _ExportFormat = require('./ExportFormat');

var _ExportFormat2 = _interopRequireDefault(_ExportFormat);

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var ReportService = (function (_Service) {
  _inherits(ReportService, _Service);

  function ReportService() {
    _classCallCheck(this, ReportService);

    _get(Object.getPrototypeOf(ReportService.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ReportService, [{
    key: 'getDownloadURL',

    /**
     * Returns the URL at which the report file can be downloaded.
     * The report will be generated as a gzip archive, containing
     * the report file itself.
     *
     * @param reportJobId the ID of the {@link ReportJob}
     * @param exportFormat the {@link ExportFormat} for the report file
     *
     * @return the URL for report file download
     */
    value: function getDownloadURL(reportId) {
      var exportFormat = arguments.length <= 1 || arguments[1] === undefined ? _ExportFormat2['default'].CSV_DUMP : arguments[1];

      var reportJobId = reportId;
      if (reportId.id) {
        reportJobId = +reportId.id;
      }
      return this.callAsync('getReportDownloadURL', {
        reportJobId: reportJobId,
        exportFormat: exportFormat
      });
    }

    /**
     * Initiates the execution of a {@link ReportQuery} on the server.
     *
     * The following fields are required:
     * <ul>
     *   <li>{@link ReportJob#reportQuery}</li>
     * </ul>
     *
     * @param reportJob the report job to run
     *
     * @return the report job with its ID filled in
     */
  }, {
    key: 'runReportJob',
    value: function runReportJob(reportJob) {
      if (reportJob.toObject) {
        reportJob = reportJob.toObject();
      }
      return this.callAsync('runReportJob', { reportJob: reportJob }).then(function (resp) {
        return new _ReportJob2['default'](resp.id, resp.reportQuery, resp.reportJobStatus);
      });
    }
  }, {
    key: 'create',
    value: function create() {
      return new _ReportQuery2['default']();
    }
  }, {
    key: 'checkStatus',
    value: function checkStatus(reportJob) {
      return this.callAsync('getReportJobStatus', { reportJobId: +reportJob.id });
    }
  }, {
    key: 'waitForJob',
    value: function waitForJob(reportJob) {
      var pollInterval = arguments.length <= 1 || arguments[1] === undefined ? 2000 : arguments[1];

      var service = this;

      return this.checkStatus(reportJob).then(function (status) {
        reportJob.status = status;
      }).then(function () {
        if (reportJob.isComplete) {
          return reportJob;
        }

        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            service.waitForJob(reportJob, pollInterval).then(resolve, reject);
          }, pollInterval);
        });
      });
    }

    /**
     * Resolves to a response stream
     *
     * @param report the ID of the {@link ReportJob}
     * @param exportFormat the {@link ExportFormat} for the report file
     *
     * @return the URL for report file download
     */
  }, {
    key: 'download',
    value: function download(report) {
      var exportFormat = arguments.length <= 1 || arguments[1] === undefined ? _ExportFormat2['default'].CSV_DUMP : arguments[1];

      return this.getDownloadURL(report, exportFormat).then(function (url) {
        return _https2['default'].get(url);
      });
    }
  }]);

  return ReportService;
})(_Service3['default']);

exports['default'] = ReportService;
module.exports = exports['default'];