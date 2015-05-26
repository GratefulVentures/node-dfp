import Dfp from 'node-google-dfp'
import bluebird from 'bluebird'

import InventoryService from './inventory/Service'
import OrderService from './order/Service'
import LineItemService from './lineitem/Service'
import NetworkService from './network/Service'
import CompanyService from './company/Service'
import UserService from './user/Service'
import CreativeService from './creative/Service'
import CreativeWrapperService from './creativeWrapper/Service'
import LineItemCreativeAssociationService from './lineItemCreativeAssociation/Service'

const ServiceMap = {
    inventory: InventoryService,
    order: OrderService,
    lineitem: LineItemService,
    network: NetworkService,
    company: CompanyService,
    users: UserService,
    creative: CreativeService,
    creativeWrapper: CreativeWrapperService,
    lineItemCreativeAssociation: LineItemCreativeAssociationService
}

function createAliases() {
    var aliases = {}
    Object.keys(ServiceMap).forEach(alias => {
        let service = ServiceMap[alias]

        aliases[service.name] = alias
    })

    return aliases
}

const ServiceAliases = createAliases()




class ApiClient {

    constructor(networkCode, displayName, version) {
        this.dfpUser = new Dfp.User(networkCode, displayName, version)

        this.services = {}
    }

    load(...serviceNames) {
        return this.getServices(...serviceNames)
            .then(this.exposeServices.bind(this))
    }

    exposeServices(services) {
        Object.keys(services).forEach(serviceName => {
            this.exposeService(serviceName, services[serviceName])
        })

        return services
    }

    exposeService(serviceName, service) {
        if (serviceName in ServiceAliases) {
            let alias = ServiceAliases[serviceName]
            let ServiceWrapper = ServiceMap[alias]

            this[alias] = new ServiceWrapper(service)
        }
    }

    setAuthClient(authClient) {
        this.authClient = authClient

        this.dfpUser.setClient(authClient)

        return this
    }

    getServices(...serviceNames) {
        let services = {}

        serviceNames = serviceNames.map(this.resolveServiceName)

        return Promise
            .all(serviceNames.map(this.getService.bind(this)))
            .then(results => {
                serviceNames.forEach((name, i) => services[name] = results[i])

                return services
            })
    }

    getService(serviceName, callback) {
        serviceName = this.resolveServiceName(serviceName)

        let promise = new Promise(resolve => {
            if (serviceName in this.services) {
                return resolve(this.services[serviceName])
            }
            this.dfpUser.getService(serviceName, resolve)
        }).then(service => {
            return bluebird.promisifyAll(service)
        }).then(service => {
            this.services[serviceName] = service

            return service
        })

        if (callback) {
            promise.then(callback)
        }

        return promise
    }

    resolveServiceName(serviceName) {
        if (serviceName in ServiceMap) {
            serviceName = ServiceMap[serviceName].name
        }

        return serviceName
    }
}

export default ApiClient
