import Statement from './common/Statement'
import ObjectCreator from './common/ObjectCreator'

class Service {

    constructor(soapService) {
        this.waitingOperations = []
        this.setSoapService(soapService)

        this.serviceName = this.constructor.name.replace(/Service$/, '')
    }

    createStatement(query) {
        if (typeof query === 'string') {
            return { filterStatement: { query } }
        }

        if (! query) {
            return { filterStatement: { query: '' } }
        }

        let statement = new Statement(query)

        return { filterStatement: statement.createStatement() }
    }

    list(query) {
        return this.callAsync(`get${this.serviceName}sByStatement`, this.createStatement(query))
    }

    setSoapService(soapService) {
        this.soapService = soapService

        Object.keys(soapService).forEach(method => {
            if (!(method in this)) {
                this[method] = (...args) => {
                    return this.callAsync(method, ...args)
                }
            }
        })

        if (this.initialize) {
            this.initialize()
        }

        return this
    }

    callAsync(method, ...args) {
        let fn = this.soapService[method]

        return new Promise((resolve, reject) => {
            fn(...args.concat([(err, res) => {
                if (err) {
                    reject(err)
                } else {
                    if (res && 'rval' in res) {
                        res = res.rval
                    }

                    resolve(res)
                }
            }]))
        })
    }

    createObject(...args) {
        return new ObjectCreator(...args)
    }

    findOrCreate(obj) {
        return this
            .list(`WHERE name = '${obj.name}'`)
            .then(res => {
                if (res && res.results) {
                    return res.results[0]
                }

                return this.create(obj)
            })
    }
}

export default Service
