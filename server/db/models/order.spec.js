const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Correct data', () => {
    describe('orderInstance', () => {
      let order
      beforeEach(async () => {
        order = await Order.create({
          firstName: 'Ron',
          lastName: 'Weasley',
          email: 'ron@hogwarts.edu',
        })
      })

      it('produces correct order total', () => {
        expect(order.firstName).to.be.equal('Ron')
      })
    })
  })
})
