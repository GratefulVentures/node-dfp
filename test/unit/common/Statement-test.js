import Statement from '../../../src/common/Statement'

describe('Statement class', () => {

  it('should allow new constructor args', () => {
    let statement = new Statement({ limit: 10 })

    expect(statement).to.have.property('limit', 10)
  })

  describe('building filterStatement', () => {
    const create = (conditions) => {
      return new Statement(conditions)
    }

    it('LIMIT', () => {
      expect(create({ limit: 10 }).filterStatement).to.have.property('query', 'LIMIT 10')
    })

    it('LIMIT with an OFFSET', () => {
      expect(create({ limit: 10, offset: 0 }).filterStatement).to.have.property('query', 'LIMIT 0, 10')
    })

    it('LIMIT with an page number', () => {
      expect(create({ limit: 10, page: 0 }).filterStatement).to.have.property('query', 'LIMIT 0, 10')
      expect(create({ limit: 10, page: 1 }).filterStatement).to.have.property('query', 'LIMIT 10, 10')
    })

    it('filterStatement', () => {
      expect(JSON.stringify(create({ limit: 10 }))).to.equal('{"filterStatement":{"query":"LIMIT 10"}}')
    })

    it('allows value map', () => {
      let conditions = { query: { name: ':name' }, values: [{ key: 'name', value: 'testing' }] }
      expect(create(conditions).filterStatement).to.have.property('query', 'WHERE name = :name')
    })
  })

})
