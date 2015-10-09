import Service from '../Service'

class CustomTargetingService extends Service {

    keys(query) {
        return this.callAsync('getCustomTargetingKeysByStatement', this.createStatement(query))
    }

    values(query) {
        return this.callAsync('getCustomTargetingValuesByStatement', this.createStatement(query))
    }
}

export default CustomTargetingService
