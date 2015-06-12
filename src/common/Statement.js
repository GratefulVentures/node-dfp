import omit from '101/omit'
import pluck from '101/pluck'

class Statement extends Object {

    constructor(conditions = {}) {
        super()

        this.limit = pluck(conditions, 'limit')
        this.order = pluck(conditions, 'order')
        this.offset = pluck(conditions, 'offset')
        this.page = pluck(conditions, 'page')
        this.values = pluck(conditions, 'values')
        this.query = pluck(conditions, 'query')
        this.conditions = omit(conditions, ['limit', 'order', 'values', 'page', 'offset'])

        this.filterStatement = this.createStatement()
    }

    createStatement() {
        let statement = []
        let query = this.query
        let values = this.values || []

        if (query === Object(query)) {
            query = Object.keys(query).map(field => {
                return this.createWhereClause(field, query[field])
            }).filter(clause => clause && clause.length).join(' AND ')
        }

        if (typeof query === 'string' && query.length) {
            statement.push(`WHERE ${query}`)
        }

        statement.push(this.createLimitClause())

        let result = { query: statement.filter(st => st && st.length).join(' ') }

        if (values.length) {
            result.values = values.map(value => {
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
                }
            })
        }

        return result
    }

    createWhereClause(field, value) {
        let operator = '='
        let formatted = ''
        if (Array.isArray(value)) {
            operator = 'IN'
            formatted = value
                .map(val => JSON.stringify(val))
                .join(', ')

            if (formatted.length) {
                formatted = `(${formatted})`
            }
        } else if (typeof value === 'string') {
            if (0 !== value.indexOf(':')) {
                value = JSON.stringify(value)
            }
            formatted = value
        }

        if (formatted.length) {
            return `${field} ${operator} ${formatted}`
        }
    }

    createLimitClause() {
        let limit = this.limit
        let offset = this.offset
        let clause = []

        if (! limit || isNaN(limit)) {
            return
        }

        if (this.page !== undefined && !isNaN(this.page)) {
            offset = limit * this.page
        }

        if (offset !== undefined && !isNaN(offset)) {
            clause.push(offset)
        }

        if (limit && !isNaN(limit)) {
            clause.push(limit)
        } else {
            return
        }

        if (clause.length > 0) {
            return `LIMIT ${clause.join(', ')}`
        }
    }

    toJSON() {
        return { filterStatement: this.createStatement() }
    }

}

export default Statement
