import AdUnit from '../../../src/inventory/AdUnit'

describe('AdUnit class', () => {
  it('should allow new constructor args', () => {
    let adUnit = new AdUnit()
    expect(adUnit.id).to.equal(undefined)
  })

  it('constructor should throw error with "null" arg', () => {
    expect(() => new AdUnit(0)).to.throw()
  })

  it('sets constructor options as class properties', () => {
    let adUnit = new AdUnit({ id: 'test' })
    expect(adUnit.id).to.equal('test')
  })

  describe('adding multiple sizes', () => {
    it('300x250', () => {
      let adUnit = new AdUnit()

      expect(adUnit.adUnitSizes).to.have.length(0)

      adUnit.addSizes('300x250', '728x90')

      expect(adUnit.adUnitSizes).to.have.length(2)
    })
  })
})
