const FIELDS = [
  'id',
  'parentId',
  'hasChildren',
  'parentPath',
  'name',
  'description',
  'targetWindow',
  'status',
  'adUnitCode',
  'adUnitSizes',
  'targetPlatform',
  'mobilePlatform',
  'explicitlyTargeted',
  'inheritedAdSenseSettings',
  'partnerId',
  'appliedLabelFrequencyCaps',
  'effectiveLabelFrequencyCaps',
  'appliedLabels',
  'effectiveAppliedLabels',
  'effectiveTeamIds',
  'appliedTeamIds',
  'lastModifiedDateTime',
  'smartSizeMode',
  'refreshRate',
  'isSharedByDistributor',
  'crossSellingDistributor',
  'externalSetTopBoxChannelId',
  'isSetTopBoxEnabled'
];

class AdUnit {
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

  constructor(options = {}) {
    if (typeof options !== 'object') {
      throw new Error('Invalid argument provided to AdUnit');
    }

    this.adUnitSizes = [];

    Object.keys(options)
      .filter(key => -1 < AdUnit.FIELDS.indexOf(key))
      .forEach(key => {
        this[key] = options[key];
      });
  }

  addSize(width, height) {
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

  addSizes(...sizes) {
    sizes.map(size => size.split('x').map(Number)).forEach(size => {
      this.addSize(size[0], size[1]);
    });

    return this;
  }

  toObject() {
    let obj = {};

    FIELDS.forEach(field => {
      if (this[field] !== null) {
        obj[field] = this[field];
      }
    });

    return obj;
  }
}

AdUnit.FIELDS = FIELDS;

export default AdUnit;
