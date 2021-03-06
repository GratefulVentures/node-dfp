'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FIELDS = ['id', 'parentId', 'hasChildren', 'parentPath', 'name', 'description', 'targetWindow', 'status', 'adUnitCode', 'adUnitSizes', 'targetPlatform', 'mobilePlatform', 'explicitlyTargeted', 'inheritedAdSenseSettings', 'partnerId', 'appliedLabelFrequencyCaps', 'effectiveLabelFrequencyCaps', 'appliedLabels', 'effectiveAppliedLabels', 'effectiveTeamIds', 'appliedTeamIds', 'lastModifiedDateTime', 'smartSizeMode', 'refreshRate', 'isSharedByDistributor', 'crossSellingDistributor', 'externalSetTopBoxChannelId', 'isSetTopBoxEnabled'];

var AdUnit = (function () {
  /**
   * @property {string} id
   * @property {string} parentId
   * @property {boolean} hasChildren
   * @property {Array} parentPath
   * @property {string} name
   * @property {string} description
   * @property {AdUnitTargetWindow} targetWindow
   * @property {InventoryStatus} status
   * @property {string} adUnitCode
   * @property {Array} adUnitSizes
   * @property {TargetPlatform} targetPlatform
   * @property {MobilePlatform} mobilePlatform
   * @property {boolean} explicitlyTargeted
   * @property {AdSenseSettingsInheritedProperty} inheritedAdSenseSettings
   * @property {integer} partnerId
   * @property {Array} appliedLabelFrequencyCaps
   * @property {Array} effectiveLabelFrequencyCaps
   * @property {Array} appliedLabels
   * @property {Array} effectiveAppliedLabels
   * @property {Array} effectiveTeamIds
   * @property {Array} appliedTeamIds
   * @property {DateTime} lastModifiedDateTime
   * @property {SmartSizeMode} smartSizeMode
   * @property {integer} refreshRate
   * @property {boolean} isSharedByDistributor
   * @property {CrossSellingDistributor} crossSellingDistributor
   * @property {string} externalSetTopBoxChannelId
   * @property {boolean} isSetTopBoxEnabled
   */

  function AdUnit() {
    var _this = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, AdUnit);

    if (typeof options !== 'object') {
      throw new Error('Invalid argument provided to AdUnit');
    }

    this.adUnitSizes = [];

    Object.keys(options).filter(function (key) {
      return -1 < AdUnit.FIELDS.indexOf(key);
    }).forEach(function (key) {
      _this[key] = options[key];
    });
  }

  _createClass(AdUnit, [{
    key: 'addSize',
    value: function addSize(width, height) {
      this.adUnitSizes.push({
        size: {
          width: width,
          height: height,
          isAspectRatio: false
        },
        environmentType: 'BROWSER',
        fullDisplayString: width + 'x' + height
      });

      return this;
    }
  }, {
    key: 'addSizes',
    value: function addSizes() {
      var _this2 = this;

      for (var _len = arguments.length, sizes = Array(_len), _key = 0; _key < _len; _key++) {
        sizes[_key] = arguments[_key];
      }

      sizes.map(function (size) {
        return size.split('x').map(Number);
      }).forEach(function (size) {
        _this2.addSize(size[0], size[1]);
      });

      return this;
    }
  }, {
    key: 'toObject',
    value: function toObject() {
      var _this3 = this;

      var obj = {};

      FIELDS.forEach(function (field) {
        if (_this3[field] !== null) {
          obj[field] = _this3[field];
        }
      });

      return obj;
    }
  }]);

  return AdUnit;
})();

AdUnit.FIELDS = FIELDS;

exports['default'] = AdUnit;
module.exports = exports['default'];