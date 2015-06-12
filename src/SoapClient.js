import Soap from 'soap'


class SoapClient {

    constructor(networkCode, applicationName, version = 'v201505') {
        this.networkCode = networkCode
        this.applicationName = applicationName
        this.version = version
        this.wsdlBase = 'https://ads.google.com/apis/ads/publisher'
        this.ns = 'https://www.google.com/apis/ads/publisher/' + this.version
    }

    setCredentials(authHeader) {
        this.security = {
            addHeaders(headers) {
                headers.Authorization = authHeader
            },
            toXML() {
                return ''
            }
        }
    }

    createRequestHeader() {
        const RequestHeader = {
            attributes: {
                'xsi:type':  'SoapRequestHeader',
                'xmlns:ns1': this.ns
            },
            'networkCode':     this.networkCode,
            'applicationName': this.applicationName
        }

        return { RequestHeader }
    }

    getService(serviceName) {
        const wsdl = `${this.wsdlBase}/${this.version}/${serviceName}?wsdl`

        return this.createClient(wsdl)
            .then(client => {
                client.addSoapHeader(this.createRequestHeader(), '', 'ns1', '')
                client.setSecurity(this.security)

                return client
            })
    }

    createClient(wsdl) {
        return new Promise((resolve, reject) => {
            Soap.createClient(wsdl, {}, (err, client) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(client)
                }
            })
        })
    }

}

export default SoapClient
