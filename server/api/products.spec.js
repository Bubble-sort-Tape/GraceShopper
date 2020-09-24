/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('All Products Route /api/products', () => {
    const prod = {
      name: "Bertie Bott's Every Flavor Beans",
      //name: "Bertie Bott's Every Flavor Beans",
      description:
        'Delicious normal jelly beans are mixed with crazy, creepy flavors in a 20-flavor magical medley.',
      imageUrl:
        'https://vignette.wikia.nocookie.net/harrypotter/images/6/60/Bertie_Botts_EFB.png/revision/latest/scale-to-width-down/341?cb=20161128010133',
      price: 350,
      inventory: 50,
    }
    beforeEach(async () => {
      await Product.create(prod)
    })

    it('GET /api/products', async () => {
      const res = await request(app).get('/api/products').expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].imageUrl).to.be.equal(prod.imageUrl)
    })
  }) // end describe('/api/products')

  describe('/api/products/ single product routes', () => {
    //dostuff
  }) // end describe('/api/products/:productId')
}) // end describe('Product routes')
