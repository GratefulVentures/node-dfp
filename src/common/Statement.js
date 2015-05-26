import omit from '101/omit'
import pluck from '101/pluck'

class Statement extends Object {

    constructor(conditions = {}) {
        super()

        this.limit = pluck(conditions, 'limit')
        this.order = pluck(conditions, 'order')
        this.offset = pluck(conditions, 'offset')
        this.page = pluck(conditions, 'page')
        this.query = omit(conditions, ['limit', 'order'])

        this.filterStatement = this.createStatement()
    }

    createStatement() {
        let statement = []
        let query = this.query

        if (query === Object(query)) {
            query = Object.keys(query).map(field => {
                return this.createWhereClause(field, query[field])
            }).filter(clause => clause && clause.length).join(' AND ')
        }

        if (typeof query === 'string' && query.length) {
            statement.push(`WHERE ${query}`)
        }

        statement.push(this.createLimitClause())

        return { query: statement.filter(st => st && st.length).join(' ') }
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
            formatted = JSON.stringify(value)
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

}

Object.defineProperty(Statement.prototype, 'query', {
  enumerable: false,
  configurable: true,
  writable: true
})

Object.defineProperty(Statement.prototype, 'order', {
  enumerable: false,
  configurable: true,
  writable: true
})

Object.defineProperty(Statement.prototype, 'limit', {
  enumerable: false,
  configurable: true,
  writable: true
})

Object.defineProperty(Statement.prototype, 'offset', {
  enumerable: false,
  configurable: true,
  writable: true
})

Object.defineProperty(Statement.prototype, 'page', {
  enumerable: false,
  configurable: true,
  writable: true
})

// let descriptor = Object.getOwnPropertyDescriptor(Statement.prototype, 'filterStatement')
// descriptor.enumerable = true

// Object.defineProperty(Statement.prototype, 'filterStatement', descriptor)

export default Statement
