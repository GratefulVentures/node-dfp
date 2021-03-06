'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _omit = require('101/omit');

var _omit2 = _interopRequireDefault(_omit);

var _pluck = require('101/pluck');

var _pluck2 = _interopRequireDefault(_pluck);

var Statement = (function (_Object) {
  _inherits(Statement, _Object);

  function Statement() {
    var conditions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Statement);

    _get(Object.getPrototypeOf(Statement.prototype), 'constructor', this).call(this);

    this.limit = (0, _pluck2['default'])(conditions, 'limit');
    this.order = (0, _pluck2['default'])(conditions, 'order');
    this.offset = (0, _pluck2['default'])(conditions, 'offset');
    this.page = (0, _pluck2['default'])(conditions, 'page');
    this.values = (0, _pluck2['default'])(conditions, 'values');
    this.query = (0, _pluck2['default'])(conditions, 'query');
    this.conditions = (0, _omit2['default'])(conditions, ['limit', 'order', 'values', 'page', 'offset']);

    this.filterStatement = this.createStatement();
  }

  _createClass(Statement, [{
    key: 'createStatement',
    value: function createStatement() {
      var _this = this;

      var statement = [];
      var query = this.query;
      var values = this.values || [];

      if (query === Object(query)) {
        query = Object.keys(query).map(function (field) {
          return _this.createWhereClause(field, query[field]);
        }).filter(function (clause) {
          return clause && clause.length;
        }).join(' AND ');
      }

      if (typeof query === 'string' && query.length) {
        statement.push('WHERE ' + query);
      }

      statement.push(this.createLimitClause());

      var result = { query: statement.filter(function (st) {
          return st && st.length;
        }).join(' ') };

      if (values.length) {
        result.values = values.map(function (value) {
          return {
            attributes: {
              'xsi:type': 'dfp:String_ValueMapEntry'
            },
            key: value.key,
            value: {
              attributes: {
                'xsi:type': 'dfp:TextValue'
              },
              value: value.value
            }
          };
        });
      }

      return result;
    }
  }, {
    key: 'createWhereClause',
    value: function createWhereClause(field, value) {
      var operator = '=';
      var formatted = '';
      if (Array.isArray(value)) {
        operator = 'IN';
        formatted = value.map(function (val) {
          return JSON.stringify(val);
        }).join(', ');

        if (formatted.length) {
          formatted = '(' + formatted + ')';
        }
      } else if (typeof value === 'string') {
        if (0 !== value.indexOf(':')) {
          value = JSON.stringify(value);
        }
        formatted = value;
      }

      if (formatted.length) {
        return field + ' ' + operator + ' ' + formatted;
      }
    }
  }, {
    key: 'createLimitClause',
    value: function createLimitClause() {
      var limit = this.limit;
      var offset = this.offset;
      var clause = [];

      if (!limit || isNaN(limit)) {
        return;
      }

      if (this.page !== undefined && !isNaN(this.page)) {
        offset = limit * this.page;
      }

      if (offset !== undefined && !isNaN(offset)) {
        clause.push(offset);
      }

      if (limit && !isNaN(limit)) {
        clause.push(limit);
      } else {
        return;
      }

      if (clause.length > 0) {
        return 'LIMIT ' + clause.join(', ');
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return { filterStatement: this.createStatement() };
    }
  }]);

  return Statement;
})(Object);

exports['default'] = Statement;
module.exports = exports['default'];