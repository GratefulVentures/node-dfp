import Service from '../Service';
import AdUnit from './AdUnit';
import util from 'util';

class AdUnitService extends Service {
  list(query) {
    let filterStatement = this.createStatement(query).filterStatement;

    return this.callAsync('getAdUnitsByStatement', { filterStatement });
  }

  create(...adUnits) {
    util.log('adunits: ' + util.inspect(adUnits));
    if (!adUnits.length) {
      util.log('creating adunit');
      return this.createObject(new AdUnit(), this.create.bind(this), [
        'addSize',
        'addSizes'
      ]);
    }

    adUnits = adUnits.map(adUnit => {
      if (adUnit.toObject) {
        return adUnit.toObject();
      }
      return adUnit;
    });

    return this.callAsync('createAdUnits', { adUnits });
  }
}

export default AdUnitService;
