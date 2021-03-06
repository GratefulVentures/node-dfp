'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ReportJobStatus = require('./ReportJobStatus');

var _ReportJobStatus2 = _interopRequireDefault(_ReportJobStatus);

var ReportJob = (function () {
  /**
   * @param jobId
   * @param reportQuery
   * @param status = ReportJobStatus.IN_PROGRESS
   */

  function ReportJob(jobId) {
    _classCallCheck(this, ReportJob);

    this.id = jobId;
  }

  _createClass(ReportJob, [{
    key: 'isComplete',
    get: function get() {
      return this.status === _ReportJobStatus2['default'].COMPLETED || this.status === _ReportJobStatus2['default'].FAILED;
    }
  }]);

  return ReportJob;
})();

exports['default'] = ReportJob;
module.exports = exports['default'];