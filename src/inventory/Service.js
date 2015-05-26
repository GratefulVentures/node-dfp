import Service from '../Service'

import AdUnitService from './AdUnitService'

class InventoryService extends Service {

    get adunits() {
        return new AdUnitService(this.soapService)
    }
}

export default InventoryService
