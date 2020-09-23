const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Correct data', () => {
    describe('productInstance', () => {
      let product
      beforeEach(async () => {
        product = await Product.create({
          name: 'Magic Product',
          description: 'This is a description.',
          imageUrl: 'https://www.image.com/',
          price: 350,
          inventory: 50,
        })
      })

      it('produces correct product name', () => {
        expect(product.name).to.be.equal('Magic Product')
      })
    })
  })
})
