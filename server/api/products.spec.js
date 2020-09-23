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

  describe('/api/products/ all product routes', () => {
    //dostuff
  }) // end describe('/api/products')

  describe('/api/products/ single product routes', () => {
    //dostuff
  }) // end describe('/api/products/:productId')
}) // end describe('Product routes')