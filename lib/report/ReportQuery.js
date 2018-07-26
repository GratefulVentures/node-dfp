'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var requiredProps = ['dimensions', 'columns', 'startDate', 'endDate'];

/**
 * A {@code ReportQuery} object allows you to specify
 * the selection criteria for generating a report.
 */

var ReportQuery = (function (_Object) {
  _inherits(ReportQuery, _Object);

  function ReportQuery() {
    _classCallCheck(this, ReportQuery);

    _get(Object.getPrototypeOf(ReportQuery.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ReportQuery, [{
    key: 'run',

    /**
     * The list of break-down types being requested in the report.
     * The generated report will contain the dimensions in the
     * same order as requested.
     *
     * @property {Dimension[]} dimensions
     */
    // dimensions: Array<string>;

    /**
     * The ad unit view for the report.
     * Defaults to {@link AdUnitView#TOP_LEVEL}.
     *
     * @property {AdUnitView} adUnitView
     */

    /**
     * The list of trafficking statistics and revenue information being requested in the report. The
     * generated report will contain the columns in the same order as requested.
     *
     * @property {Column[]} columns
     */

    /**
     * The list of break-down attributes being requested in this report. Some
     * {@link DimensionAttribute} values can only be used with certain {@link Dimension} values that
     * must be included in the {@link #dimensions} attribute. The generated report will contain the
     * attributes in the same order as requested.
     *
     * @property {DimensionAttribute[]} dimensionAttributes
     */

    /**
     * The list of {@link CustomField#id} being requested in this report. To add a
     * {@link CustomField} to the report, you must include its corresponding {@link Dimension},
     * determined by the {@link CustomField#entityType}, as a {@link #dimensions dimension}.
     * <table>
     *   <tr>
     *     <th scope="col">{@link CustomFieldEntityType#entityType}</th>
     *     <th scope="col">{@link Dimension}</th>
     *   </tr>
     *   <tr>
     *     <td>{@link CustomFieldEntityType#LINE_ITEM}</td>
     *     <td>{@link Dimension#LINE_ITEM_NAME}</td>
     *   </tr>
     *   <tr>
     *     <td>{@link CustomFieldEntityType#ORDER}</td>
     *     <td>{@link Dimension#ORDER_NAME}</td>
     *   </tr>
     *   <tr>
     *     <td>{@link CustomFieldEntityType#CREATIVE}</td>
     *     <td>{@link Dimension#CREATIVE_NAME}</td>
     *   </tr>
     * </table>
     *
     * @property {Number[]} customFieldIds
     */

    /**
     * @param waitToComplete = false
     */
    value: function run() {
      var _this = this;

      return new Promise(function () {
        _this.service;
      });
    }
  }, {
    key: 'toObject',
    value: function toObject() {
      var _this2 = this;

      var missingProps = [];
      requiredProps.forEach(function (propName) {
        if (!_this2[propName]) {
          missingProps.push(propName);
        }
      });

      if (missingProps.length) {
        throw new Error('Missing required properties: ' + JSON.stringify(missingProps));
      }

      var obj = {};

      Object.getOwnPropertyNames(this).forEach(function (field) {
        if (_this2[field] !== null) {
          obj[field] = _this2[field];
        }
        if (field === 'startDate' || field === 'endDate') {
          obj[field] = {
            year: _this2[field].getFullYear(),
            month: _this2[field].getMonth() + 1,
            day: _this2[field].getDate()
          };
        }
      });

      return obj;
    }
  }]);

  return ReportQuery;
})(Object);

exports['default'] = ReportQuery;
module.exports = exports['default'];