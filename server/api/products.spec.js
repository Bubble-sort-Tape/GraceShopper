/* global describe beforeEach it */

const {expect} = require('chai')
const {agent} = require('supertest')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/ all product routes', () => {
    //dostuff
  }) // end describe('/api/products')

  describe('/api/products/:productId single product routes', () => {
    //Finish this once data is final
    //
    // it('GET /api/product/:productId responds with one product', async () => {
    //   const response = await agent.get('/api/products/:productId').expect(200);
    //   expect(response.body).to.deep.equal(product)
    // })
    //
  }) // end describe('/api/products/:productId')
}) // end describe('Product routes')
