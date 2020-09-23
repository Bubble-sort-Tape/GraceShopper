const {expect} = require('chai')
const db = require('../index')
const Address = db.model('address')

describe('Address model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Correct data', () => {
    describe('addressInstance', () => {
      let address
      beforeEach(async () => {
        address = await Address.create({
          address1: '4 Privet Drive',
          city: 'Surrey',
          zip: '55555',
          country: 'England',
        })
      })

      it('produces correct street address', () => {
        expect(address.address1).to.be.equal('4 Privet Drive')
      })
    })
  })
})
