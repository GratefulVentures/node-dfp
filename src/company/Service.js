import Service from '../Service'

import Company from './Company'
import CompanyType from './CompanyType'

class CompanyService extends Service {

    get advertisers() {
        const service = this

        return {
            list() {
                return service.list(`WHERE type = '${CompanyType.ADVERTISER}'`)
            }
        }
    }

    get agencies() {
        const service = this

        return {
            list() {
                return service.list(`WHERE type = '${CompanyType.AGENCY}'`)
            }
        }
    }

    list(query) {
        return this.getCompaniesByStatement(this.createStatement(query))
    }

    create(...companies) {
        if (! companies.length) {
            return this.createObject(
                new Company(),
                this.create.bind(this)
            )
        }

        companies = companies.map(company => {
            if (company.toObject) {
                return company.toObject()
            }
            return company
        })

        return this.createCompanies({ companies })
    }
}

export default CompanyService
